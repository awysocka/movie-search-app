import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.large} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100px;
  margin: 5px 0;
`;

export const Attribution = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1;
`;

export const ExternalLink = styled.a`
  color: inherit;
  padding: 0;
  line-height: 1;
  margin-left: 10px;
`;
