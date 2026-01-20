import { useState } from "react";

export const useInput = ({
  name = "",
  type = "",
  placeholder = "",
  initialValue = "",
  validate = null,
} = {}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validate) {
      const message = validate(newValue);
      setError(message);
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError(null);
  };

  return {
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    reset
  };
};
