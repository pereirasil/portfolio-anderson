import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FinancialManagement from './components/FinancialManagement';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Conciliacao from './components/Conciliacao';
import Previsao from './components/Previsao';
import AReceber from './components/AReceber';
import Cadastro from './components/Cadastro';
import Informativo from './components/Informativo';
import Lancamentos from './components/Lancamentos';
import { GlobalSnackbarProvider } from './components/GlobalSnackbar';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalSnackbarProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/conciliacao" element={<Conciliacao />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/areceber" element={<AReceber />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/informativo" element={<Informativo />} />
            <Route path="/planilha1" element={<FinancialManagement />} />
            <Route path="/lancamentos" element={<Lancamentos />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </GlobalSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
