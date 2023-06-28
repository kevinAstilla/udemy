import useInput from '../hooks/use-input';
const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const BasicForm = (props) => {

  const {
    inputValue: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    onInputChangeHandler: onFirstNameChangeHandler,
    onInputBlurHandler: onFirstNameBlurHandler,
    resetInputValue: resetEnteredFirstName
  } = useInput(value => value.trim() !== "");

  const {
    inputValue: enteredLastName,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    onInputChangeHandler: onLastNameChangeHandler,
    onInputBlurHandler: onLastNameBlurHandler,
    resetInputValue: resetEnteredLastName
  } = useInput(value => value.trim() !== "");

  const {
    inputValue: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    onInputChangeHandler: onEmailChangeHandler,
    onInputBlurHandler: onEmailBlurHandler,
    resetInputValue: resetEnteredEmail
  } = useInput(value => VALID_EMAIL_REGEX.test(value));


  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if(!isFirstNameValid && !isLastNameValid && !isEmailValid) {
      return;
    }
    resetEnteredFirstName();
    resetEnteredLastName();
    resetEnteredEmail();
  }
  const firstNameInputClassname = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClassname = firstNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClassName = emailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClassname}>
          <label htmlFor='firstName'>First Name</label>
          <input 
          type='text' 
          id='firstName'
          onChange={onFirstNameChangeHandler}
          onBlur={onFirstNameBlurHandler}
          value={enteredFirstName}/>
          {firstNameHasError && (<p className='error-text'>Please enter valid first name.</p>)}
        </div>
        <div className={lastNameInputClassname}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
          type='text' 
          id='lastName'
          onChange={onLastNameChangeHandler}
          onBlur={onLastNameBlurHandler}
          value={enteredLastName}/>
          {lastNameHasError && (<p className='error-text'>Please enter valid last name.</p>)}
        </div>
      </div>
      <div className={emailInputClassName}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='email' 
        id='name' 
        onChange={onEmailChangeHandler}
        onBlur={onEmailBlurHandler}
        value={enteredEmail}/>
        {emailHasError && (<p className='error-text'>Please enter valid email.</p>)}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
