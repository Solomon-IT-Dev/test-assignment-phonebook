import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phoneBookApi';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal';
import { showSuccessMessage, showErrorMessage } from 'utils/notifications';
import {
  FaTrashAlt,
  FaSpinner,
  // FaStar,
  // FaRegStar,
  FaUserEdit,
  // FaExternalLinkAlt,
  FaMailchimp,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  ContactItemWrapper,
  ContactAvatarWrapper,
  Avatar,
  ContactItemName,
  ContactItemNum,
  // MoreInfoBtn,
  // FavoriteBtn,
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

        <ContactItemName>{name}</ContactItemName>
        <ContactItemNum href={`tel:${phone}`}>{phone}</ContactItemNum>
        {/* 
      <MoreInfoBtn
        type="button"
        // onClick={() => onContactDelete(id, name)}
        aria-label="Full contact information"
      >
        <IconContext.Provider value={{ size: '2em' }}>
          <FaExternalLinkAlt />
        </IconContext.Provider>
      </MoreInfoBtn> */}

        {/* <FavoriteBtn
        type="button"
        onClick={() => onContactDelete(id, name)}
        disabled={isDeleting}
        aria-label="Mark favorite"
      >
        <IconContext.Provider value={{ size: '2em' }}>
          <FaStar />
        </IconContext.Provider>
      </FavoriteBtn> */}

        <EditBtn
          type="button"
          // onClick={() => onContactDelete(id, name)}
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
          <p>
            {id}, {name}, {phone}, {avatarURL}
          </p>
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
