import { useState } from 'react';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
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
  FormInputLabel,
  FormInput,
  FormSubmitBtn,
} from './ContactForm.styled';

export default function ContactForm({ handleModalClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isLoading: isCreating }] = useAddContactMutation();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const avatarURLInputId = nanoid();

  const onNameChange = evt => {
    setName(evt.currentTarget.value);
  };

  const onPhoneChange = evt => {
    setPhone(evt.currentTarget.value);
  };

  const onAvatarURLChange = evt => {
    setAvatarURL(evt.currentTarget.value);
  };

  const formReset = () => {
    setName('');
    setPhone('');
    setAvatarURL('');
  };

  const onContactFormSubmit = async evt => {
    evt.preventDefault();

    const contactDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.phone === phone
    );

    if (contactDuplicate) {
      showInfoMessage('This contact is already in your phonebook');
      return;
    }

    const phoneDuplicate = contacts.find(contact => contact.phone === phone);

    if (phoneDuplicate) {
      showInfoMessage('This phone number is already in your phonebook');
      return;
    }

    const newContact = {
      name,
      phone,
      avatarURL,
    };

    try {
      await addContact(newContact);
      handleModalClose();
      showSuccessMessage('New contact has been added in your phonebook');
    } catch (error) {
      console.log(error.message);
      showErrorMessage('Something goes wrong, new contact was not created');
    }

    formReset();
  };

  return (
    <ContactSubmitForm onSubmit={onContactFormSubmit}>
      <FormInputLabel htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="Type name (required)"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
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
          value={phone}
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
          value={avatarURL}
          onChange={onAvatarURLChange}
          id={avatarURLInputId}
        />
      </FormInputLabel>
      <FormSubmitBtn type="submit" disabled={isCreating}>
        {isCreating ? 'Adding...' : 'Add contact'}
      </FormSubmitBtn>
    </ContactSubmitForm>
  );
}

ContactForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};
