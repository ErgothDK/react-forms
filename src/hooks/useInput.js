import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(inputValue);

  function changeHandler(event) {
    setInputValue(event.target.value);
    setDidEdit(false);
  }

  function blurHandler() {
    setDidEdit(true);
  }

  return {
    value: inputValue,
    changeHandler,
    blurHandler,
    hasError: didEdit && !valueIsValid,
  };
}
