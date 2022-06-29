import { useState } from 'react';
import { useGetAllContactsQuery, useUpdateContactMutation } from 'services/api';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import {
  showInfoMessage,
  showSuccessMessage,
  showErrorMessage,
} from 'helpers/notifications';
import { FormBtn } from 'components/Buttons';
import {
  ContactSubmitForm,
  FormName,
  FormInputLabel,
  FormInput,
} from './EditForm.styled';

export function EditForm({ handleModalClose, id, name, phone, avatarURL }) {
  const [formState, setFormState] = useState({ name, phone, avatarURL });

  const { data: contacts } = useGetAllContactsQuery();
  const [updateContact, { isLoading: isEditing }] = useUpdateContactMutation();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const avatarURLInputId = nanoid();

  const onChange = (name, value) => {
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const onNameChange = evt => {
    onChange(evt.currentTarget.name, evt.currentTarget.value);
  };

  const onPhoneChange = evt => {
    onChange(evt.currentTarget.name, evt.currentTarget.value);
  };

  const onAvatarURLChange = evt => {
    onChange(evt.currentTarget.name, evt.currentTarget.value);
  };

  const formReset = () => {
    setFormState({});
  };

  const onContactFormSubmit = async evt => {
    evt.preventDefault();

    const contactDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === formState.name.toLowerCase() &&
        contact.phone === formState.phone &&
        contact.avatarURL === formState.avatarURL
    );

    if (contactDuplicate) {
      showInfoMessage('This contact is already in your phone book');
      return;
    }

    const updatedContact = {
      id,
      name: formState.name,
      phone: formState.phone,
      avatarURL: formState.avatarURL,
    };

    try {
      await updateContact(updatedContact);
      handleModalClose();
      showSuccessMessage('Contact is successfully updated');
    } catch (error) {
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
          value={formState.name}
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
          value={formState.phone}
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
          value={formState.avatarURL}
          onChange={onAvatarURLChange}
          id={avatarURLInputId}
        />
      </FormInputLabel>
      <FormBtn
        activeName="Edit contact"
        disabledName="Editing..."
        isDisabled={isEditing}
      />
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
