import React from 'react';
import { Box, Grid, Typography, Card, CardActionArea, CardContent, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import AppBarWithLogout from './AppBarWithLogout';

const modules = [
  {
    title: 'Conciliação',
    icon: <AssignmentIcon fontSize="large" />,
    color: '#e57373',
    path: '/conciliacao',
  },
  {
    title: 'Previsão',
    icon: <TrendingUpIcon fontSize="large" />,
    color: '#64b5f6',
    path: '/previsao',
  },
  {
    title: 'À Receber',
    icon: <MonetizationOnIcon fontSize="large" />,
    color: '#81c784',
    path: '/areceber',
  },
  {
    title: 'Cadastro',
    icon: <PersonAddIcon fontSize="large" />,
    color: '#9575cd',
    path: '/cadastro',
  },
  {
    title: 'Informativo',
    icon: <InfoIcon fontSize="large" />,
    color: '#ffd54f',
    path: '/informativo',
  },
  {
    title: 'Lançamentos',
    icon: <AssignmentIcon fontSize="large" />,
    color: '#90caf9',
    path: '/lancamentos',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  // Simulação de nome do usuário
  const userName = 'Usuário';

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', p: 0 }}>
      <AppBarWithLogout userName={userName} />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          Olá, {userName}!
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Escolha um módulo para acessar:
        </Typography>
        <Grid container spacing={3} justifyContent="flex-start">
          {modules.map((mod) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={mod.title}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardActionArea onClick={() => navigate(mod.path)}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                    <Avatar sx={{ bgcolor: mod.color, width: 56, height: 56, mb: 2 }}>
                      {mod.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {mod.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard; 