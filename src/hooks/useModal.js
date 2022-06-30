import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [showModal, setShowModal] = useState(initialMode);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return [showModal, toggleModal];
};

export default useModal;
