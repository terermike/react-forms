import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValid = validationFn(enteredValue);

  function handleOnBlur() {
    setDidEdit(true);
  }
  function handleValueChange(event) {
    setValue(event.target.value);
    setDidEdit(false);
  }
  return {
    value: enteredValue,
    handleOnBlur,
    handleValueChange,
    hasError: didEdit && !isValid,
  };
}
