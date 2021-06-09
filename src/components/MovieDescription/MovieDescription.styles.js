import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1024px;
  display: grid;
  grid-row-gap: 20px;

  ${({ theme }) => theme.breakpoints.medium} {
    grid-template-columns: 300px 1fr;
    grid-column-gap: 40px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 25px;
  margin: 0 auto;
`;

export const Title = styled.p`
  width: 80%;
  font-size: 3.6rem;
  line-height: 1.2;
  text-align: start;
  margin-bottom: 5px;
`;

export const BaseInfo = styled.div`
  position: relative;
`;

export const GenresInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const Genre = styled.span`
  font-size: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  padding: 3px 10px;
  margin-right: 5px;
`;

export const TimeDataInfo = styled.p`
  font-size: 1.4rem;
  margin-bottom: 20px;

  span:not(:last-child)::after {
    content: ' | ';
  }
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  margin-bottom: 40px;
`;

export const ProductionCountries = styled.div`
  span:not(:last-child)::after {
    content: ' / ';
  }
`;

export const AdditionalInfo = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 1fr;
`;
