import React, { useState, useRef } from "react";
import style from "./NewUser.module.css";

// UI
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const NewUser = (props) => {
  const usernameInputRef = useRef();
  const yearInputRef = useRef();

  const [error, setError] = useState();


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    // Error Handling
    // check if there are username
    if (
      enteredUsername.trim().length === 0 ||
      enteredYear.trim().length === 0
    ) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age (non-empty values)'
        })
      return;
    }

    if (+enteredYear < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 1)'
        })
      return;
    }

    const newUserData = {
      id: Math.random.toString(),
      username: enteredUsername,
      year: enteredYear,
    };

    props.onSaveUserData(newUserData);
    usernameInputRef.current.value = '';
    yearInputRef.current.value = '';
  };

  const errorHandler = () => {
      setError(null);
  }
  return (
    <div>
        {error && <Modal title={error.title} message={error.message} confirmButton='Okay' onConfirm={errorHandler}/>}
      <Card> 
        <form className={`${style["form-control"]}`}>
          <label>Username</label>
          <input
            type="text"
            ref={usernameInputRef}
          />
          <label>Age (years)</label>
          <input
            type="number"
            ref={yearInputRef}
          />
          <Button type="submit" onClick={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
