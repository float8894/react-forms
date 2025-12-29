import { useState } from 'react';
import Input from './Input';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didBlur, setDidBlur] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    enteredValues.email !== '' && !enteredValues.email.includes('@');

  const passwordIsInvalid = enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Email: ${enteredValues.email} || Password: ${enteredValues.password}`
    );
  }

  function handleInputChange(id, val) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [id]: val,
    }));
  }

  function handleInputBlur(id) {
    setDidBlur((prev) => ({ ...prev, [id]: true }));
  }

  function handleInputFocus(id) {
    setDidBlur((prev) => ({ ...prev, [id]: false }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          onFocus={() => handleInputFocus('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={
            emailIsInvalid && didBlur.email
              ? 'Please enter a valid email address.'
              : undefined
          }
        ></Input>

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          onFocus={() => handleInputFocus('password')}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
          value={enteredValues.password}
          error={
            passwordIsInvalid && didBlur.password
              ? 'Please enter a valid password.'
              : undefined
          }
        ></Input>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
