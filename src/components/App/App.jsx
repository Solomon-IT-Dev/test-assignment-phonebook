import { useState } from 'react';
import Container from 'components/Container';
import AppName from 'components/AppName';
import CreateContactBtn from 'components/CreateContactBtn';
import Filter from 'components/Filter';
import SectionName from 'components/SectionName';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import ContactForm from 'components/ContactForm';
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
          <CreateContactBtn onOpen={toggleModal} />
          <SectionName title="Contacts" />
          <Filter />
          <ContactList />
          <ToastContainer />
        </AppContentLayout>
      </Container>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={toggleModal} />
        </Modal>
      )}
    </>
  );
}
