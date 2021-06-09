import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Wrapper } from 'App.styles';
import Navigation from 'components/Navigation/Navigation';
import HomePage from './views/HomePage';
import SearchResults from './views/SearchResults';
import MovieDetails from './views/MovieDetails';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Wrapper>
          <Switch>
            <Route path={`/search/:id`}>
              <MovieDetails />
            </Route>
            <Route path={`/search`}>
              <SearchResults />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
