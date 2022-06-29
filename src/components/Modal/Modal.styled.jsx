import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: show 0.3s ease-in-out 0s;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
max-width: 360px;
    width: 80%;
  padding: 20px;
  background-color: white;
  border-top: 2px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  @keyframes open {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.7);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(1);
    }
  }

  animation: open 0.3s ease-in-out 0s;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: #232323;
  background: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
    background-color: #a3a3a830;
  }
`;
