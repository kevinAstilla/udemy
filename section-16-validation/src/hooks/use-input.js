import { useState } from 'react';

const useImport = (validationFunction) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [isInputTouched, setIsInputTouched] = useState(false);

    const isInputValueValid = validationFunction(enteredInput);
    const inputHasError = !isInputValueValid && isInputTouched;

    const onInputChangeHandler = (event) => {
        setEnteredInput(event.target.value);
    }
    const onInputBlurHandler = (event) => {
        setIsInputTouched(true);
    }
    const resetInputValue = () => {
        setEnteredInput('');
        setIsInputTouched(false);
    }
    return {
        inputValue: enteredInput,
        isValid: isInputValueValid,
        hasError: inputHasError,
        onInputChangeHandler,
        onInputBlurHandler,
        resetInputValue
    }
};

export default useImport;