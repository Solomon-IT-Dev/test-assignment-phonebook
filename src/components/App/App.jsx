import AppName from 'components/AppName';
import ContactForm from 'components/ContactForm';
import SectionName from 'components/SectionName';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppContainer } from './App.styled';

export default function App() {
  return (
    <AppContainer>
      <AppName title="Phonebook" />
      <ContactForm />
      <SectionName title="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </AppContainer>
  );
}
