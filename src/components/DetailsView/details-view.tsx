import { DetailWrapper, DetailImage, ButtonWrapper } from "../../pages/styled";
import { ProductT } from "../../types";

interface IDetailsView {
  data?: ProductT;
  formattedPrice: string;
  handleGoBack: () => void;
}

export const DetailsView = ({ data, formattedPrice, handleGoBack }: IDetailsView) => {
  return (
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
  );
};
