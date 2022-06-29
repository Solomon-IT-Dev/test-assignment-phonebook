import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaPlus } from 'react-icons/fa';
import {
  CreateWrapper,
  CreateBtn,
  BtnMessage,
} from './CreateContactBtn.styled';

export default function CreateContactBtn({ onOpen }) {
  return (
    <CreateWrapper>
      <CreateBtn type="button" onClick={onOpen}>
        <IconContext.Provider value={{ size: '2em' }}>
          <FaPlus />
        </IconContext.Provider>
      </CreateBtn>
      <BtnMessage>Create contact</BtnMessage>
    </CreateWrapper>
  );
}

CreateContactBtn.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
