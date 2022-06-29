import { useState } from 'react';
import {
  useGetAllContactsQuery,
  useUpdateContactMutation,
} from 'services/phoneBookApi';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import {
  showInfoMessage,
  showSuccessMessage,
  showErrorMessage,
} from 'utils/notifications';
import {
  ContactSubmitForm,
  FormName,
  FormInputLabel,
  FormInput,
  FormSubmitBtn,
} from './EditForm.styled';

export default function EditForm({
  handleModalClose,
  id,
  name,
  phone,
  avatarURL,
}) {
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [newAvatarURL, setNewAvatarURL] = useState(avatarURL);

  const { data: contacts } = useGetAllContactsQuery();
  const [updateContact, { isLoading: isEditing }] = useUpdateContactMutation();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const avatarURLInputId = nanoid();

  const onNameChange = evt => {
    setNewName(evt.currentTarget.value);
  };

  const onPhoneChange = evt => {
    setNewPhone(evt.currentTarget.value);
  };

  const onAvatarURLChange = evt => {
    setNewAvatarURL(evt.currentTarget.value);
  };

  const formReset = () => {
    setNewName('');
    setNewPhone('');
    setNewAvatarURL('');
  };

  const onContactFormSubmit = async evt => {
    evt.preventDefault();

    const contactDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === newName.toLowerCase() &&
        contact.phone === newPhone &&
        contact.avatarURL === newAvatarURL
    );

    if (contactDuplicate) {
      showInfoMessage('This contact is already in your phone book');
      return;
    }

    const updatedContact = {
      id,
      name: newName,
      phone: newPhone,
      avatarURL: newAvatarURL,
    };

    try {
      await updateContact(updatedContact);
      handleModalClose();
      showSuccessMessage('Contact is successfully updated');
    } catch (error) {
      console.log(error.message);
      showErrorMessage('Something goes wrong, contact was not updated');
    }

    formReset();
  };

  return (
    <ContactSubmitForm onSubmit={onContactFormSubmit}>
      <FormName>Edit</FormName>
      <FormInputLabel htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="Type name (required)"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={newName}
          onChange={onNameChange}
          id={nameInputId}
          required
        />
      </FormInputLabel>
      <FormInputLabel htmlFor={phoneInputId}>
        Number
        <FormInput
          type="tel"
          name="phone"
          placeholder="Type number (required)"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={newPhone}
          onChange={onPhoneChange}
          id={phoneInputId}
          required
        />
      </FormInputLabel>
      <FormInputLabel htmlFor={avatarURLInputId}>
        Avatar URL
        <FormInput
          type="text"
          name="avatarURL"
          placeholder="Put URL of avatar"
          pattern="(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))"
          title="Avatar URL must contain link to image with format such as jpg, jpeg, png, webp, svg or gif"
          value={newAvatarURL}
          onChange={onAvatarURLChange}
          id={avatarURLInputId}
        />
      </FormInputLabel>
      <FormSubmitBtn type="submit" disabled={isEditing}>
        {isEditing ? 'Editing...' : 'Edit contact'}
      </FormSubmitBtn>
    </ContactSubmitForm>
  );
}

EditForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
};
