import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { Overlay, ModalContainer, CloseButton } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContainer>
        <CloseButton type="button" onClick={onClose}>
          <IconContext.Provider value={{ size: '2em' }}>
            <MdClose />
          </IconContext.Provider>
        </CloseButton>
        {children}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
