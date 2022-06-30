import styled from '@emotion/styled';

export const FormSubmitBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 auto;
  font-size: 18px;
  text-transform: uppercase;
  border: 0px;
  border-radius: 50px;
  background-color: #3498db;
  color: white;
  box-shadow: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }

  :disabled {
    background-color: #4e95c4;
  }
`;
