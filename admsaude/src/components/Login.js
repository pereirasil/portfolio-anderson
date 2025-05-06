import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login
    navigate('/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 350, width: '100%', textAlign: 'center' }}>
        <LockOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
        <Typography variant="h5" gutterBottom>Bem-vindo ao ADM Saúde</Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 1 }}>
            Entrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Link href="#" variant="body2">Esqueceu a senha?</Link>
          <Link href="/cadastro" variant="body2">Cadastre-se</Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login; 