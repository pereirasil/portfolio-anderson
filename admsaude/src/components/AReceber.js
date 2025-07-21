import React from 'react';
import { Box, Typography, Breadcrumbs, Link, TextField } from '@mui/material';

const AReceber = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          À Receber
        </Typography>
      </Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
        <Typography color="text.primary">À Receber</Typography>
      </Breadcrumbs>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Informe a porcentagem do valor pago para calcular o valor a receber.
      </Typography>
      <TextField label="Porcentagem do Pago (%)" type="number" fullWidth sx={{ maxWidth: 300 }} />
    </Box>
  );
};

export default AReceber; 