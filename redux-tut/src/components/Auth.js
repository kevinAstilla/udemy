import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authenticationAction } from '../store/authentication';
import useInput from '../hooks/use-input';

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Auth = () => {

  const {
    inputValue: emailInput,
    isError: isEmailError,
    onInputChangeHandler: onEmailChangeHandler,
    onInputBlurHandler: onEmailBlurHandler
  } = useInput(value => VALID_EMAIL_REGEX.test(value))
  const dispatch = useDispatch();

  const {
    inputValue: passwordInput,
    isError: isPasswordError,
    onInputChangeHandler: onPasswordChangeHandler,
    onInputBlurHandler: onPasswordBlurHandler
  } = useInput(value => value.trim() !== "");

  const loginFormOnSubmitHandler = (event) => {
    event.preventDefault();
    if (!isEmailError && !isPasswordError) {
      dispatch(authenticationAction.login())
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginFormOnSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler} value={emailInput}/>
            {isEmailError  && <p className={classes['error-text']}>Please enter a valid email</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={onPasswordChangeHandler} onBlur={onPasswordBlurHandler} value={passwordInput} />
            {isPasswordError  && <p className={classes['error-text']}>Please enter a valid password</p>}
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
