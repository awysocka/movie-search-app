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

export const Title = styled.p`
  max-width: 180px;
  font-size: 2rem;
  text-align: center;
`;
