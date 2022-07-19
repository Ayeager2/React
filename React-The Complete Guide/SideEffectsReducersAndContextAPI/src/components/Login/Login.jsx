import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  return
}

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [emailState, dispatchEmail] = useReducer((emailReducer, { value: '', isValid: false },);

  useEffect(() => {

    return () => {

    }

  }, [enteredPassword])

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  // setFormIsValid(
  //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
  // );
  //   }, 1000);
  //   return () => {
  //     clearTimeout(identifier);
  //   }
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.isValid && enteredPassword.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.isValid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={ classes.login }>
      <form onSubmit={ submitHandler }>
        <div
          className={ `${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }` }
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={ enteredEmail }
            onChange={ emailChangeHandler }
            onBlur={ validateEmailHandler }
          />
        </div>
        <div
          className={ `${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }` }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={ enteredPassword }
            onChange={ passwordChangeHandler }
            onBlur={ validatePasswordHandler }
          />
        </div>
        <div className={ classes.actions }>
          <Button type="submit" className={ classes.btn } disabled={ !formIsValid }>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;