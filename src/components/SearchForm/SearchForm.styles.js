import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: ${(props) => (props.transparent ? '420px' : '820px')};
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  margin-bottom: ${(props) => (props.transparent ? '0px' : '60px')};

  ${({ theme }) => theme.breakpoints.medium} {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${(props) =>
    props.transparent ? 'transparent' : ({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-right: none;
  border-radius: 50px 0 0 50px;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => (props.transparent ? '1.6rem' : '2.4rem')};
  font-weight: 300;
  padding: 15px 20px;
  color: ${(props) =>
    props.transparent
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.grey};

  ::placeholder {
    color: ${(props) =>
      props.transparent
        ? ({ theme }) => theme.colors.white
        : ({ theme }) => theme.colors.grey};
  }

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.lightpurple};
  }

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 10px 20px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightpurple};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple};
  border-radius: 0 50px 50px 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => (props.transparent ? '1.8rem' : '3rem')};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  ${({ theme }) => theme.breakpoints.medium} {
    padding: 10px 30px;
  }
`;
