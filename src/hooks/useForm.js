import { useState } from 'react';

const useForm = initialValue => {
  const [formState, setFormState] = useState(initialValue);

  const onChange = evt => {
    const { name, value } = evt.currentTarget;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const formReset = () => {
    setFormState({});
  };

  return {
    formData: formState,
    onChange,
    formReset,
  };
};

export default useForm;
