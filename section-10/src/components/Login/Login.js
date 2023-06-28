import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.value.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return { value: '', isValid: false};
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.value.trim().length > 6};
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return { value: '', isValid: false};
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useReducer Examples
  const [emailstate, emailDispatch] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value: '', isValid: null});


  const { isValid: emailIsValid } = emailstate;
  const { isValid: passwordIsValid } = passwordState

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const ctx = useContext(AuthContext);
  // useEffect Examples
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('check for vaidity');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log('cleanup');
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailstate.isValid && passwordState.isValid
      );
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      passwordState.isValid && emailstate.isValid
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    passwordDispatch({type: 'INPUT_BlUR'})
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailstate.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailstate.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
