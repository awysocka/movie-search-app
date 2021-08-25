import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import {
  Wrapper,
  PaginationList,
  PaginationItem,
  StyledLink,
} from 'components/Pagination/Pagination.styles';

const Pagination = ({ totalPages, currentPage, searchValue }) => {
  let start;
  let end;

  if (totalPages < 2) {
    return null;
  }

  if (totalPages <= 5) {
    start = 1;
    end = totalPages;
  } else if (currentPage <= 2) {
    start = 1;
    end = 5;
  } else if (currentPage >= totalPages - 1) {
    start = totalPages - 4;
    end = totalPages;
  } else {
    start = currentPage - 2;
    end = currentPage + 2;
  }

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <PaginationList>
        {currentPage === 1 ? (
          <PaginationItem disable>
            <IoChevronBack />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <StyledLink to={`/search?q=${searchValue}&page=${currentPage - 1}`}>
              <IoChevronBack />
            </StyledLink>
          </PaginationItem>
        )}

        {currentPage > 3 && totalPages > 5 && (
          <>
            <PaginationItem>
              <Link to={`/search?q=${searchValue}&page=1`}>1</Link>
            </PaginationItem>
            <PaginationItem>...</PaginationItem>
          </>
        )}
        {pageNumbers.map((item) =>
          item !== currentPage ? (
            <PaginationItem key={item}>
              <Link to={`/search?q=${searchValue}&page=${item}`}>{item}</Link>
            </PaginationItem>
          ) : (
            <PaginationItem key={item} current>
              {item}
            </PaginationItem>
          )
        )}
        {currentPage <= totalPages - 3 && totalPages > 5 && (
          <>
            <PaginationItem>...</PaginationItem>
            <PaginationItem>
              <Link to={`/search?q=${searchValue}&page=${totalPages}`}>
                {totalPages}
              </Link>
            </PaginationItem>
          </>
        )}
        {currentPage === totalPages ? (
          <PaginationItem disable>
            <IoChevronForward />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <StyledLink to={`/search?q=${searchValue}&page=${currentPage + 1}`}>
              <IoChevronForward />
            </StyledLink>
          </PaginationItem>
        )}
      </PaginationList>
    </Wrapper>
  );
};

export default Pagination;
