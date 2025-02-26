import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatalogWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CatalogItem = styled.li`
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    background-color: #c3c3c3;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const DetailImage = styled.picture`
  & > img {
    width: 300px;
    height: 300px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 8px;
`;