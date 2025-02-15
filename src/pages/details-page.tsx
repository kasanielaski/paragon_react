import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { ButtonWrapper, DetailImage, DetailWrapper, Wrapper } from './styled';
import { ProductT } from '../types';
import { API_URL } from '../constants';

interface IDetailsPageProps {
  apiUrl?: string;
}


export const DetailsPage = ({ apiUrl = API_URL }: IDetailsPageProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [data, setData] = useState<ProductT>();
  const [loading, setLoading] = useState(true);

  const id = useMemo(() => {
    return parseInt(searchParams.get('id') || '1');
  }, [searchParams]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'GET'
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl, id]);

  const formattedPrice = useMemo(() => {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(data?.price as number);
  }, [data?.price]);

  useEffect(() => {
    fetchData();
  }, [searchParams, fetchData]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <h1>Product details</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DetailWrapper>
          <DetailImage>
            <img src={data?.images[0]} alt={data?.title} />
          </DetailImage>
          <span>{data?.title}</span>
          <span style={{ textAlign: 'center' }}>{data?.description}</span>
          <span>Price: {formattedPrice}</span>
          <ButtonWrapper>
            <button onClick={handleGoBack}>Go back</button>
          </ButtonWrapper>
        </DetailWrapper>
      )}
    </Wrapper>
  );
};
