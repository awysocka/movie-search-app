import styled from 'styled-components';

export const MovieRating = styled.span`
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 17px 10px;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkpurple};
  text-align: center;
  border-radius: 0 25px 0 25px;
`;
