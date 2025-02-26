import { CatalogItem, CatalogWrapper } from "../../pages/styled";
import { ResponseT } from "../../types";

interface ICatalogListProps {
  data?: ResponseT;
  handleDetails: (id: string) => void;
}

export const CatalogList = ({data, handleDetails}: ICatalogListProps) => {
  return (
    <CatalogWrapper>
      {data?.products.map((item) => (
        <CatalogItem key={item.id} onClick={() => handleDetails(item.id)}>
          {item.title}
        </CatalogItem>
      ))}
    </CatalogWrapper>
  );
};
