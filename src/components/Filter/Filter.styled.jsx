import styled from '@emotion/styled';

// export const FilterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
//   border: 1px solid darkgray;
//   background-color: white;
//   box-shadow: 0px 2px 10px -3px;
//   border-radius: 5px;
//   width: 354px;
// `;

// export const FilterInputLabel = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin: 10px 20px 10px 20px;
//   font-size: 16px;
//   text-transform: uppercase;
//   letter-spacing: 4px;
// `;

export const FilterInput = styled.input`
  width: 360px;
  margin: 20px auto;
  padding: 6px 12px;
  font-size: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: ghostwhite;
  box-shadow: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 2px 10px -3px;
  }
`;
