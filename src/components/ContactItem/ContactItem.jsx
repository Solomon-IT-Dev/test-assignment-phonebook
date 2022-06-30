import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/api';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import { EditForm } from 'components/Forms';
import { showSuccessMessage, showErrorMessage } from 'helpers/notifications';
import { FaTrashAlt, FaSpinner, FaUserEdit, FaMailchimp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  ContactItemWrapper,
  ContactAvatarWrapper,
  Avatar,
  ContactInfoWrapper,
  ContactItemName,
  ContactItemNum,
  EditBtn,
  DeleteBtn,
} from './ContactItem.styled';

export default function ContactItem({ id, name, phone, avatarURL }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [showEditModal, toggleEditModal] = useModal();

  const onContactDelete = async (contactId, contactName) => {
    try {
      await deleteContact(contactId);
      showSuccessMessage(
        `"${contactName}" has been deleted from your phone book`
      );
    } catch (error) {
      showErrorMessage(
        `Something goes wrong, "${contactName}" was not deleted`
      );
    }
  };

  return (
    <>
      <ContactItemWrapper>
        <ContactAvatarWrapper>
          {avatarURL ? (
            <Avatar src={avatarURL} alt="Contact avatar" />
          ) : (
            <IconContext.Provider value={{ size: '3em' }}>
              <FaMailchimp />
            </IconContext.Provider>
          )}
        </ContactAvatarWrapper>
        <ContactInfoWrapper>
          <ContactItemName>{name}</ContactItemName>
          <ContactItemNum href={`tel:${phone}`}>{phone}</ContactItemNum>
        </ContactInfoWrapper>

        <EditBtn
          type="button"
          onClick={() => toggleEditModal()}
          aria-label="Edit contact"
        >
          <IconContext.Provider value={{ size: '2em' }}>
            <FaUserEdit />
          </IconContext.Provider>
        </EditBtn>

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

      {showEditModal && (
        <Modal onClose={toggleEditModal}>
          <EditForm
            handleModalClose={toggleEditModal}
            id={id}
            name={name}
            phone={phone}
            avatarURL={avatarURL}
          />
        </Modal>
      )}
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
};
