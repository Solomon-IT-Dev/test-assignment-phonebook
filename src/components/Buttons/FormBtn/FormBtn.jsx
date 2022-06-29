import PropTypes from 'prop-types';
import { FormSubmitBtn } from './FormBtn.styled';

export function FormBtn({ activeName, disabledName, isDisabled }) {
  return (
    <FormSubmitBtn type="submit" disabled={isDisabled}>
      {isDisabled ? disabledName : activeName}
    </FormSubmitBtn>
  );
}

FormBtn.propTypes = {
  activeName: PropTypes.string.isRequired,
  disabledName: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
