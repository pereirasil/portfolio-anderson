import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card, CardActionArea, CardContent, Avatar, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import AppBarWithLogout from './AppBarWithLogout';
import EmpresaService from '../services/EmpresaService';
import LancamentoService from '../services/LancamentoService';

const modules = [
  {
    title: 'Conciliação',
    icon: <AssignmentIcon fontSize="large" />,
    color: '#e57373',
    path: '/conciliacao',
    key: 'conciliacao',
  },
  {
    title: 'Previsão',
    icon: <TrendingUpIcon fontSize="large" />,
    color: '#64b5f6',
    path: '/previsao',
    key: 'previsao',
  },
  {
    title: 'À Receber',
    icon: <MonetizationOnIcon fontSize="large" />,
    color: '#81c784',
    path: '/areceber',
    key: 'areceber',
  },
  {
    title: 'Cadastro',
    icon: <PersonAddIcon fontSize="large" />,
    color: '#9575cd',
    path: '/cadastro',
    key: 'cadastro',
  },
  {
    title: 'Informativo',
    icon: <InfoIcon fontSize="large" />,
    color: '#ffd54f',
    path: '/informativo',
    key: 'informativo',
  },
  {
    title: 'Lançamentos',
    icon: <AssignmentIcon fontSize="large" />,
    color: '#90caf9',
    path: '/lancamentos',
    key: 'lancamentos',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = 'Usuário';
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ empresas: 0, lancamentos: 0 });

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const [empresasRes, lancamentosRes] = await Promise.all([
          EmpresaService.getAll(),
          LancamentoService.getAll(),
        ]);
        setStats({
          empresas: empresasRes.data.length,
          lancamentos: lancamentosRes.data.length,
        });
      } catch (e) {
        setStats({ empresas: 0, lancamentos: 0 });
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

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
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="center" sx={{ width: '70%', margin: '0 auto' }}>
            {modules.map((mod) => (
              <Grid item xs={12} sm={6} md={4} key={mod.title}>
                <Card sx={{ 
                  borderRadius: 3, 
                  boxShadow: 3,
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <CardActionArea 
                    onClick={() => navigate(mod.path)}
                    sx={{ height: '100%' }}
                  >
                    <CardContent sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      height: '100%'
                    }}>
                      <Avatar sx={{ bgcolor: mod.color, width: 56, height: 56, mb: 2 }}>
                        {mod.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {mod.title}
                      </Typography>
                      {mod.key === 'lancamentos' && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          Total: {stats.lancamentos}
                        </Typography>
                      )}
                      {mod.key === 'cadastro' && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          Empresas: {stats.empresas}
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard; 