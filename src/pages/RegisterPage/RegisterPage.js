import { Autocomplete, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewUser } from 'redux/auth/auth-options';

import style from './RegisterPage.module.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();

    dispatch(
      postNewUser({
        name: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );

    setUsername('');
    setEmail('');
    setPassword('');
  };

  const changeInput = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    }

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }

    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submitForm}>
        <input
          className={style.text}
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={changeInput}
        />
        <span>username</span>

        <input
          className={style.email}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={changeInput}
        />
        <span>email</span>

        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="password"
          autoComplete="on"
          value={password}
          onChange={changeInput}
        />
        <span>password</span>

        {/* <Autocomplete
          // disablePortal
          // options={top100Films}
          id="combo-box-demo"
          sx={{ width: 300 }}
          renderInput={params => (
            <input
              className={style.input}
              type="password"
              name="password"
              placeholder="password"
              autoComplete="on"
              value={password}
              onChange={changeInput}
            />
          )}
        /> */}

        <button className={style.signin}>
          <Button variant="contained">Sign In</Button>
        </button>

        {/* <button className={style.signin}>Sign In</button> */}
      </form>

      <div className={style.coment}>
        <p className={style.comentText}>Who are you warrior?</p>
      </div>

      <div className={style.decor}></div>
    </div>
  );
};
export default RegisterPage;