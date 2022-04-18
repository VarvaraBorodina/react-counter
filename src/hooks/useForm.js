import { useState, useCallback } from "react";

const useForm = (initialFields) => {
  const [formState, setFormState] = useState(initialFields);

  const handleFromChange = useCallback((event) => {
    const { value, name } = event.target;

    setFormState((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleFormReset = useCallback((event) => {
    const { value, name } = event.target;
    setFormState(initialFields);
  }, []);

  return [formState, handleFromChange, handleFormReset];
};

export default useForm;
