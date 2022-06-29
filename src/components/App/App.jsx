import { useModal } from 'hooks/useModal';
import AppName from 'components/AppName';
import { CreateContactBtn } from 'components/Buttons';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import ContactForm from 'components/Forms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppContainer, AppContentLayout } from './App.styled';

export default function App() {
  const [showCreateModal, toggleCreateModal] = useModal();

  return (
    <>
      <AppContainer>
        <AppName title="Phone book" />
        <AppContentLayout>
          <CreateContactBtn onOpen={toggleCreateModal} />
          <Filter />
          <ContactList />
          <ToastContainer />
        </AppContentLayout>
      </AppContainer>
      {showCreateModal && (
        <Modal onClose={toggleCreateModal}>
          <ContactForm handleModalClose={toggleCreateModal} />
        </Modal>
      )}
    </>
  );
}
