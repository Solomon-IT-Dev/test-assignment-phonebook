import { useState } from 'react';
import AppName from 'components/AppName';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import SectionName from 'components/SectionName';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppContentLayout } from './App.styled';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Container>
        <AppName title="Phone book" />
        <AppContentLayout>
          <ContactForm />
          <SectionName title="Contacts" />
          <Filter />
          <ContactList />
          <ToastContainer />
        </AppContentLayout>
      </Container>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h1>TEMP</h1>
        </Modal>
      )}
    </>
  );
}
