import React, { useState, useContext } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/common';
import { ProviderContext } from '../utils/ProviderContext';
import { Grid } from '@material-ui/core';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [token, setToken] = useContext(ProviderContext);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setToken(true);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <Grid container xs={12} spacing={3} direction="column">
        <Grid item xs={12}>
          <h1>Login</h1>
        </Grid>
        <Grid item xs={12}>
          <input type="text" {...username} autoComplete="new-password" placeholder="Enter username" />
        </Grid>
        <Grid item xs={12}>
          <input type="password" {...password} autoComplete="new-password" placeholder="Enter passsword" />
        </Grid>
        <Grid item xs={12}>
          <button className="app-button" onClick={handleLogin} disabled={loading} >{'Login'}</button>
        </Grid>
          {error && <><Grid item xs={12}><small style={{ color: '#D74E09' }}>{error}</small><br /></Grid></>}
      </Grid>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;