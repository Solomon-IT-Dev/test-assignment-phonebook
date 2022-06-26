import styled from '@emotion/styled';

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 640px;
  height: 80px;
  border: 1px solid darkgray;
  border-radius: 5px;
`;

export const ContactAvatarWrapper = styled.div`
  margin-right: 15px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const ContactItemName = styled.p`
  margin-left: 20px;
  font-size: 18px;
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
`;

// export const MoreInfoBtn = styled.button`
//   height: 27px;
//   padding: 0;
//   margin: 0 20px 0 50px;
//   color: #3498db;
//   background-color: transparent;
//   border: none;
//   transition: all 200ms ease-in-out;

//   :hover,
//   :focus {
//     color: #39b0ff;
//   }

//   :disabled {
//     color: #4e95c4;
//   }
// `;

// export const FavoriteBtn = styled.button`
//   height: 27px;
//   padding: 0;
//   margin: 0 20px 0 50px;
//   color: #3498db;
//   background-color: transparent;
//   border: none;
//   transition: all 200ms ease-in-out;

//   :hover,
//   :focus {
//     color: #ffea00;
//   }

//   :disabled {
//     color: #4e95c4;
//   }
// `;

export const EditBtn = styled.button`
  height: 27px;
  padding: 0;
  margin: 0 20px 0 50px;
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
  margin: 0 20px 0 50px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

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
