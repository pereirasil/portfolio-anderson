import React from 'react';
import { Box, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const Conciliacao = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <BackButton />
        <Typography variant="h5" sx={{ ml: 2, fontWeight: 600 }}>
          Conciliação
        </Typography>
      </Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
        <Typography color="text.primary">Conciliação</Typography>
      </Breadcrumbs>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Selecione o mês, ano e prestador para iniciar a conciliação.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/planilha1')}>
        Preencher Planilha 1
      </Button>
    </Box>
  );
};

export default Conciliacao; 