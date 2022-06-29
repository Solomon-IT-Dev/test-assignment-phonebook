import styled from '@emotion/styled';

export const ContactSubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const FormName = styled.h3`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3498db;
`;

export const FormInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  margin-top: 4px;
  padding: 4px;
  font-size: 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: ghostwhite;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    border: 2px solid #39b0ff;
  }
`;
