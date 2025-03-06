import { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Wrapper } from './styled';
import { ProductT } from '../types';
import { API_URL } from '../constants';
import { DetailsView } from '../components';

interface IDetailsPageProps {
  apiUrl?: string;
}

export const DetailsPage = ({ apiUrl = API_URL }: IDetailsPageProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = useMemo(() => {
    return parseInt(searchParams.get('id') || '1');
  }, [searchParams]);

  const { data, isLoading } = useQuery<ProductT>(
    ['product', id],
    async () => {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'GET'
      });
      return response.json();
    },
    {
      keepPreviousData: true
    }
  );

  const formattedPrice = useMemo(() => {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(data?.price as number);
  }, [data?.price]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <h1>Product details</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DetailsView data={data} formattedPrice={formattedPrice} handleGoBack={handleGoBack} />
      )}
    </Wrapper>
  );
};
