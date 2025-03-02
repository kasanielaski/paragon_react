import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Wrapper } from './styled';
import { ResponseT } from '../types';
import { API_URL } from '../constants';
import { CatalogList, Navigation } from '../components';

interface ICatalogPageProps {
  apiUrl?: string;
}

export const CatalogPage = ({ apiUrl = API_URL }: ICatalogPageProps) => {
  const [searchParams] = useSearchParams();
  const [itemsPerPage] = useState(10);

  const navigate = useNavigate();
  const history = useLocation();

  useEffect(() => {
    if (history.pathname === '/') {
      navigate(`/catalog?page=1`);
    }
  }, []);

  const page = useMemo(() => {
    return parseInt(searchParams.get('page') || '1');
  }, [searchParams]);

  const { data, isLoading} = useQuery<ResponseT>(['catalog', page, itemsPerPage], async () => {
    const offset = (page - 1) * itemsPerPage;
    const response = await fetch(`${apiUrl}?skip=${offset}&limit=${itemsPerPage}`, {
      method: 'GET'
    });
    return response.json();
  });

  const handlePageChange = (newPage: number) => {
    navigate(`/catalog?page=${newPage}`);
  };

  const handleDetails = (id: string) => {
    navigate(`/details?id=${id}`);
  };

  const isLastPage = useMemo(() => {
    return data ? page * itemsPerPage >= data?.total : true;
  }, [data, itemsPerPage, page]);

  return (
    <Wrapper>
      <h1>Catalog</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CatalogList data={data} handleDetails={handleDetails} />
          <Navigation
            handlePageChange={handlePageChange}
            page={page}
            isLastPage={isLastPage}
          />
        </>
      )}
    </Wrapper>
  );
};
