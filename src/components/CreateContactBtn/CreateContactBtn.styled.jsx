import styled from '@emotion/styled';

export const CreateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateBtn = styled.button`
  width: 48px;
  height: 48px;
  margin: 0 0 0 20px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background-color: #3498db;
  color: #ffffff;
  box-shadow: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }
`;

export const BtnMessage = styled.span`
  margin-left: 10px;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #a9a9a9;
`;
