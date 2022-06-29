import styled from '@emotion/styled';

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 640px; */
  height: 72px;
  border: 1px solid darkgray;
  border-radius: 5px;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    width: 480px;
  }

  @media screen and (min-width: 1023px) {
    width: 640px;
  }
`;

export const ContactAvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  border: 1px solid gray;
  overflow: hidden;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 15px;
  }

  @media screen and (min-width: 1023px) {
    margin-left: 20px;
  }
`;

export const Avatar = styled.img`
  object-fit: cover;
  height: 50px;
`;

export const ContactInfoWrapper = styled.div`
  margin-left: 10px;

  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin-left: 10px;
  }

  @media screen and (min-width: 1023px) {
    margin-left: 20px;
  }
`;

export const ContactItemName = styled.p`
  font-size: 16px;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    width: 140px;
    font-size: 17px;
  }

  @media screen and (min-width: 1023px) {
    width: 180px;
    font-size: 18px;
  }
`;

export const ContactItemNum = styled.a`
  font-size: 16px;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
  @media screen and (min-width: 576px) and (max-width: 1023px) {
    width: 125px;
    margin-left: 20px;
    font-size: 17px;
  }

  @media screen and (min-width: 1023px) {
    width: 180px;
    margin-left: 50px;
    font-size: 18px;
  }
`;

export const EditBtn = styled.button`
  height: 27px;
  padding: 0;
  margin-left: auto;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;

export const DeleteBtn = styled.button`
  height: 27px;
  padding: 0;
  margin: 0 10px 0 20px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    margin: 0 15px 0 20px;
  }

  @media screen and (min-width: 1023px) {
    margin: 0 20px 0 40px;
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
