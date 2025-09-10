import React, { useState } from 'react';
import api, { setAuthToken } from '../services/api';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('token', token);
      setAuthToken(token);
      onLogin(user);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
      <form onSubmit={submit}>
        <TextField label="Email" fullWidth sx={{ mb: 2 }} value={email} onChange={e=>setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} value={password} onChange={e=>setPassword(e.target.value)} />
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </Container>
  );
}
