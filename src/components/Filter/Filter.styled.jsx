import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid darkgray;
  background-color: white;
  box-shadow: 0px 2px 10px -3px;
  border-radius: 5px;
  width: 354px;
`;

export const FilterInputLabel = styled.label`
  margin: 10px 20px 10px 20px;
  font-size: 18px;
`;

export const FilterInput = styled.input`
  width: 300px;
  margin-top: 4px;
  padding: 4px;
  font-size: 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: ghostwhite;
`;