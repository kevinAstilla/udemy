import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isSixChars = (value) => value.trim().length === 6;   

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputReference = useRef();
    const streetInputReference = useRef();
    const postalCodeInputReference = useRef();
    const cityInputReference = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputReference.current.value;
        const enteredStreet = streetInputReference.current.value;
        const enteredPostalCode = postalCodeInputReference.current.value;
        const enteredCity = cityInputReference.current.value;

        const isNameValid = !isEmpty(enteredName);
        const isStreetValid = !isEmpty(enteredStreet);
        const isPostalValid = isSixChars(enteredPostalCode)
        const isCityValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: isNameValid,
            street: isStreetValid,
            postal: isPostalValid,
            city: isCityValid
        });

        const formIsValid = isNameValid && isStreetValid && isPostalValid && isCityValid;

        if (!formIsValid) {
            return ;
        }
        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostalCode,
            city: enteredCity
        });
    }
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '': classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '': classes.invalid}`
    const postalControlClasses = `${classes.control} ${formInputValidity.postal ? '': classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '': classes.invalid}`
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameInputReference}/>
          {!formInputValidity.name && (<p>Please enter valid name</p>)}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInputReference} />
          {!formInputValidity.street && (<p>Please enter valid street</p>)}
        </div>
        <div className={postalControlClasses}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalCodeInputReference}/>
          {!formInputValidity.postal && (<p>Please enter valid postal</p>)}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputReference}/>
          {!formInputValidity.city && (<p>Please enter valid city</p>)}
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    )
}

export default Checkout;