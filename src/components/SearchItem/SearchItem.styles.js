import styled from 'styled-components';

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoviePosterContainer = styled.div`
  width: 180px;
  height: 246px;
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const MoviePoster = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  max-width: 180px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
