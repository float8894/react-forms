import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onBlur={() => handleInputBlur('email')}
            onFocus={() => handleInputFocus('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          <div className='control-error'>
            {emailIsInvalid && didBlur.email && (
              <p>Please enter a valid email address.</p>
            )}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onBlur={() => handleInputBlur('password')}
            onFocus={() => handleInputFocus('password')}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
