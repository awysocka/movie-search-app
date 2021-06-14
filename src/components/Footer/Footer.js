import { useLocation } from 'react-router-dom';
import {
  Wrapper,
  Image,
  Attribution,
  ExternalLink,
} from 'components/Footer/Footer.styles';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && (
        <Wrapper>
          <p>
            &copy; 2021
            <ExternalLink
              href="https://annawysocka.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anna Wysocka
            </ExternalLink>
          </p>
          <Attribution>
            This site uses the TMDb API but is not endorsed or certified by
            TMDb.
            <ExternalLink
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="themoviedb.org logo"
              ></Image>
            </ExternalLink>
          </Attribution>
        </Wrapper>
      )}
    </>
  );
};

export default Footer;
