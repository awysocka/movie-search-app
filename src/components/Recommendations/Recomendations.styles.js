import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  width: 100%;
  margin-bottom: 100px;
`;

export const RecommendetMovies = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const Title = styled.p`
  text-align: start;
  font-size: 2.4rem;
  margin-bottom: 20px;
`;
