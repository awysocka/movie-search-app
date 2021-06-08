import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  width: 100%;
  min-height: 121px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  a:link,
  a:visited {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 40px;
    flex-direction: row;
  }
`;

export const LogoLink = styled(Link)`
  margin-bottom: 30px;

  ${({ theme }) => theme.breakpoints.medium} {
    margin-bottom: 0;
  }
`;
