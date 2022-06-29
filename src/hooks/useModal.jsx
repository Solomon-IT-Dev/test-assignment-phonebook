import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [showModal, setShowModal] = useState(initialMode);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return [showModal, toggleModal];
};
