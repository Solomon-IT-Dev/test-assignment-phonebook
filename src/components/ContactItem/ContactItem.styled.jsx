import styled from '@emotion/styled';

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 640px;
  height: 72px;
  border: 1px solid darkgray;
  border-radius: 5px;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    width: 480px;
  }
`;

export const ContactAvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  overflow: hidden;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 15px;
  }
`;

export const Avatar = styled.img`
  object-fit: cover;
  height: 50px;
`;

export const ContactDataWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  overflow: hidden;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 15px;
  }
`;

export const ContactItemName = styled.p`
  margin-left: 20px;
  font-size: 18px;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 10px;
  }
`;

export const ContactItemNum = styled.a`
  margin-left: auto;
  font-size: 18px;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 15px;
  }
`;

export const EditBtn = styled.button`
  height: 27px;
  padding: 0;
  margin-left: 80px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: auto;
  }

  :hover,
  :focus {
    color: #39b0ff;
  }
`;

export const DeleteBtn = styled.button`
  height: 27px;
  padding: 0;
  margin: 0 20px 0 40px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin: 0 15px 0 20px;
  }

  :hover,
  :focus {
    color: #ff3939;
  }

  :disabled {
    color: #4e95c4;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1s linear 0s infinite;
  }
`;
