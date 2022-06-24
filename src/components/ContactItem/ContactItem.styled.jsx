import styled from '@emotion/styled';

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 420px;
  height: 50px;
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
`;

export const ContactItemName = styled.p`
  margin-left: 20px;
  font-size: 18px;
`;

export const ContactItemNum = styled.a`
  margin-left: auto;
  font-size: 18px;
  text-decoration: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;

export const DeleteBtn = styled.button`
  display: inline-block;
  height: 27px;
  padding: 0;
  margin: 0 20px 0 50px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #ff3939;
  }

  :disabled {
    color: #4e95c4;
  }
`;
