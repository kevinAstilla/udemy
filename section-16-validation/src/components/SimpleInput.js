import useInput from '../hooks/donot-use-input';

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    resetInputValue: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    resetInputValue: resetEmailInput
  } = useInput(value => VALID_EMAIL_REGEX.test(value));


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }
    resetNameInput();
    resetEmailInput();
  }
  
  const nameInputClasses = nameInputHasError ? 'form-control invalid ':'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid ':'form-control';
  return (
    <form onSubmit={ submitFormHandler }>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}/>
      </div>
      {nameInputHasError && (<p className='error-text'>Name must not be empty.</p>)}
      <div className={emailInputClasses}>
        <input
        type='text'
        id='email'
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail} />
      </div>
      {emailInputHasError && (<p className='error-text'>Email must not be valid.</p>)}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
