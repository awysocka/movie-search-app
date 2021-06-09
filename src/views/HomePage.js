import SearchForm from 'components/SearchForm/SearchForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;

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

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 40px;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <h1>What movie are you looking for?</h1>
      <SearchForm />
    </Wrapper>
  );
};

export default HomePage;
