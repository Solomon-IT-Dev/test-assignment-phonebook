import { useGetAllContactsQuery, useAddContactMutation } from 'services/api';
import useForm from 'hooks/useForm';
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
} from '../Forms.styled';

export function ContactForm({ handleModalClose }) {
  const {
    formData: newContact,
    onChange,
    formReset,
  } = useForm({
    name: '',
    phone: '',
    avatarURL: '',
  });
  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isLoading: isCreating }] = useAddContactMutation();

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  const avatarURLInputId = nanoid();

  const { name, phone, avatarURL } = newContact;
  const onContactFormSubmit = async evt => {
    evt.preventDefault();

    const contactDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.phone === phone
    );
    if (contactDuplicate) {
      showInfoMessage('This contact is already in your phone book');
      return;
    }

    const phoneDuplicate = contacts.find(contact => contact.phone === phone);
    if (phoneDuplicate) {
      showInfoMessage('This phone number is already in your phone book');
      return;
    }

    try {
      await addContact(newContact);
      handleModalClose();
      formReset();
      showSuccessMessage('New contact has been added in your phone book');
    } catch (error) {
      showErrorMessage('Something goes wrong, new contact was not created');
    }
  };

  return (
    <ContactSubmitForm onSubmit={onContactFormSubmit}>
      <FormName>Create</FormName>
      <FormInputLabel htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="Type name (required)"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          id={avatarURLInputId}
        />
      </FormInputLabel>
      <FormBtn
        activeName="Add contact"
        disabledName="Adding..."
        isDisabled={isCreating}
      />
    </ContactSubmitForm>
  );
}

ContactForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};
