import React, { useState } from 'react';
import { Box, Typography, Breadcrumbs, Link, TextField, Button, Paper } from '@mui/material';
import BackButton from './BackButton';

const Cadastro = () => {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', porcentagem: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de cadastro
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 400, mb: 2, display: 'flex', alignItems: 'center' }}>
        <BackButton />
        <Typography variant="h5" sx={{ ml: 2, fontWeight: 600 }}>
          Cadastro de Usuário
        </Typography>
      </Box>
      <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
          <Typography color="text.primary">Cadastro</Typography>
        </Breadcrumbs>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="nome"
            fullWidth
            margin="normal"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Senha"
            name="senha"
            type="password"
            fullWidth
            margin="normal"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <TextField
            label="Porcentagem (%)"
            name="porcentagem"
            type="number"
            fullWidth
            margin="normal"
            value={form.porcentagem}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cadastro; 