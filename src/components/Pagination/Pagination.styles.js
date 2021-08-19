import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 20px 20px;
`;

export const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const PaginationItem = styled.li`
  padding: 2px;
  margin: 0 4px;
  display: ${(props) => props.disable && 'none'};
  color: ${(props) =>
    props.current
      ? ({ theme }) => theme.colors.lightpurple
      : ({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(Link)`
  padding: 2px;
  color: ${({ theme }) => theme.colors.white};
`;
