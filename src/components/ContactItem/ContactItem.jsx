import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phoneBookApi';
import { showSuccessMessage, showErrorMessage } from 'utils/notifications';
import { FaTrashAlt, FaSpinner } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  ContactItemWrapper,
  ContactItemName,
  ContactItemNum,
  DeleteBtn,
} from './ContactItem.styled';

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const onContactDelete = async (contactId, contactName) => {
    try {
      await deleteContact(contactId);
      showSuccessMessage(
        `"${contactName}" has been deleted from your phonebook`
      );
    } catch (error) {
      console.log(error.message);
      showErrorMessage(
        `Something goes wrong, "${contactName}" was not deleted`
      );
    }
  };

  return (
    <ContactItemWrapper>
      <ContactItemName>{name}</ContactItemName>
      <ContactItemNum href={`tel:${phone}`}>{phone}</ContactItemNum>
      <DeleteBtn
        type="button"
        onClick={() => onContactDelete(id, name)}
        disabled={isDeleting}
        aria-label="Delete contact"
      >
        <IconContext.Provider value={{ size: '2em' }}>
          {isDeleting ? <FaSpinner /> : <FaTrashAlt />}
        </IconContext.Provider>
      </DeleteBtn>
    </ContactItemWrapper>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
