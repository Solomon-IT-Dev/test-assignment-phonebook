import styled from '@emotion/styled';

export const CreateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CreateBtn = styled.button`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50px;
  background-color: #3498db;
  color: #232323;
  box-shadow: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }
`;

export const BtnMessage = styled.span`
  font-size: 18px;
  line-height: 1, 2;
  letter-spacing: 1px;
  margin-left: 10xp;
  color: #232323;
`;
