import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppBarWithLogout = ({ userName = 'Usuário' }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Aqui pode limpar autenticação se houver
    navigate('/login');
  };
  return (
    <AppBar position="static" color="primary" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ADM Saúde
        </Typography>
        <Box sx={{ mr: 2 }}>{userName}</Box>
        <Button color="inherit" onClick={handleLogout} variant="outlined" sx={{ bgcolor: 'white', color: 'primary.main', borderColor: 'white' }}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWithLogout; 