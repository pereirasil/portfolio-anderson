import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Paper } from '@mui/material';

const Informativo = () => {
  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 600, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Informações Gerais
        </Typography>
      </Box>
      <Paper sx={{ p: 4, maxWidth: 600, width: '100%' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
          <Typography color="text.primary">Informativo</Typography>
        </Breadcrumbs>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Aqui você pode exibir avisos, comunicados ou informações importantes para os usuários do sistema.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Informativo; 