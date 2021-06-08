import { useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import {
  StyledNavigation,
  LogoLink,
} from 'components/Navigation/Navigation.styles';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <StyledNavigation>
      <LogoLink to="/">Movie search</LogoLink>
      {pathname !== '/' && <SearchForm transparent />}
    </StyledNavigation>
  );
};

export default Navigation;
