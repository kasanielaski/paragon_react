import { ButtonWrapper } from '../../pages/styled';

interface INavigationProps {
  handlePageChange: (page: number) => void;
  page: number;
  isLastPage: boolean;
}

export const Navigation = ({ handlePageChange, page, isLastPage }: INavigationProps) => {
  return (
    <ButtonWrapper>
      <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange(page + 1)} disabled={isLastPage}>
        Next
      </button>
    </ButtonWrapper>
  );
};
