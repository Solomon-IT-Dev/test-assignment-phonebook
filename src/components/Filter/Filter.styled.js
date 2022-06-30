import styled from '@emotion/styled';

export const FilterInput = styled.input`
  max-width: 360px;
  width: 86%;
  margin: 10px auto 20px;
  padding: 6px 14px;
  font-size: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: ghostwhite;
  box-shadow: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    border: 2px solid #39b0ff;
    box-shadow: 0px 2px 10px -3px;
  }
`;
