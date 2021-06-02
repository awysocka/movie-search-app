import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import SearchForm from 'components/SearchForm/SearchForm';

const Navigation = styled.nav`
  width: 100%;
  height: 96px;
  padding: 40px 20px;

  a:link,
  a:visited {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 40px 40px 20px 40px;
  }
`;

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 5.4rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 70px;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 40px;

    h1 {
      font-size: 6.4rem;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation>
        <a href="/">Movie search</a>
      </Navigation>
      <Wrapper>
        <h1>What movie are you looking for?</h1>
        <SearchForm />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
