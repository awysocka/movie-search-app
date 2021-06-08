import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1920px;
  min-height: calc(100vh - 121px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  position: relative;

  h1 {
    font-size: 5.4rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 70px;
  }

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 40px;

    h1 {
      font-size: 6.4rem;
    }
  }
`;
