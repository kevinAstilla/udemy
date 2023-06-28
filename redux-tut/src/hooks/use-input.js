import { useState } from 'react';

const useInput = (validationFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validationFunction(enteredValue);
    const hasError = !isValid && isTouched;

    const onInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const onInputBlurHandler = (event) => {
        setIsTouched(true);
    }
    
    return {
        inputValue: enteredValue,
        isError: hasError,
        onInputChangeHandler,
        onInputBlurHandler
    }
}

export default useInput;