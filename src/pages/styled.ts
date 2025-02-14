import { styled } from 'styled-components';

export const CatalogWrapper = styled.div``;

export const CatalogList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CatalogItem = styled.li`
  cursor: pointer;

  &:hover {
    background-color: #c3c3c3;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailImage = styled.img`
  max-width: 300px;
  max-height: 300px;
`;
