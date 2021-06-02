import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1;
        background: radial-gradient(circle at bottom,
            ${({ theme }) => theme.colors.purple}, 
            ${({ theme }) => theme.colors.darkpurple});
        color: ${({ theme }) => theme.colors.white};
        
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;

        ${({ theme }) => theme.breakpoints.hover} {
            ::hover {
                cursor: pointer;
            }
        }
    }

    p {
        line-height: 1.6;
    }
`;

export default GlobalStyle;
