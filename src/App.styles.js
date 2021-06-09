import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  max-width: 1920px;
  min-height: calc(100vh - 121px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  position: relative;

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 40px;
  }
`;
