// import { useState } from 'react';
import { useModal } from 'hooks/useModal';
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
  const [showCreateModal, toggleCreateModal] = useModal();

  // const [showCreateModal, setShowCreateModal] = useState(false);

  // const toggleCreateModal = () => {
  //   setShowCreateModal(showCreateModal => !showCreateModal);
  // };

  return (
    <>
      <Container>
        <AppName title="Phone book" />
        <AppContentLayout>
          <CreateContactBtn onOpen={toggleCreateModal} />
          <SectionName title="Contacts" />
          <Filter />
          <ContactList />
          <ToastContainer />
        </AppContentLayout>
      </Container>
      {showCreateModal && (
        <Modal onClose={toggleCreateModal}>
          <ContactForm handleModalClose={toggleCreateModal} />
        </Modal>
      )}
    </>
  );
}
