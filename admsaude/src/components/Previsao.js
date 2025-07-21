import React from 'react';
import { Box, Typography, Breadcrumbs, Link, TextField } from '@mui/material';

const Previsao = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Previsão
        </Typography>
      </Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
        <Typography color="text.primary">Previsão</Typography>
      </Breadcrumbs>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Filtre os valores pagos por mês, ano e prestador.
      </Typography>
      <TextField label="Valor Pago (R$)" type="number" fullWidth sx={{ maxWidth: 300 }} />
    </Box>
  );
};

export default Previsao; 