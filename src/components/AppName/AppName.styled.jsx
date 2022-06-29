import styled from '@emotion/styled';

export const MainTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 20px;
  font-size: 52px;
  font-weight: 300;
  line-height: 1.4;
  color: #3498db;
  text-shadow: 12px 14px 12px #000000b0;

  @media (max-width: 576px) {
    letter-spacing: 26px;
    font-size: 70px;
  }

  @media (min-width: 1024px) {
    letter-spacing: 32px;
    font-size: 140px;
    line-height: 1.5;
  }
`;
