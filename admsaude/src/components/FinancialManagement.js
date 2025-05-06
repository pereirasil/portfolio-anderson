import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import BackButton from './BackButton';

const FinancialManagement = () => {
  // Mock data for companies - in a real app, this would come from an API
  const companies = [
    { id: 1, name: 'Empresa 1' },
    { id: 2, name: 'Empresa 2' },
    { id: 3, name: 'Empresa 3' },
  ];

  // State for Form 1 (Invoice Form)
  const [form1Data, setForm1Data] = useState({
    company: '',
    competenceMonth: '',
    deliveryDate: null,
    type: 'FATURA',
    agreement: '',
    batch: '',
    chargedValue: '',
  });

  // State for Form 2 (Payment Form)
  const [form2Data, setForm2Data] = useState({
    competenceMonth: '',
    paymentDate: null,
    paidValue: '',
    agreement: '',
  });

  // State for summary
  const [summary, setSummary] = useState({
    expected: 0,
    paid: 0,
    deduction: 0,
    balance: 0,
    toPayOrReceive: 0,
  });

  const handleForm1Change = (field) => (event) => {
    setForm1Data({
      ...form1Data,
      [field]: event.target.value,
    });
  };

  const handleForm2Change = (field) => (event) => {
    const newValue = event.target.value;
    setForm2Data({
      ...form2Data,
      [field]: newValue,
    });

    // Calculate deduction automatically
    if (field === 'paidValue' && form1Data.chargedValue) {
      const chargedValue = parseFloat(form1Data.chargedValue.replace(/[^0-9.-]+/g, ''));
      const paidValue = parseFloat(newValue.replace(/[^0-9.-]+/g, ''));
      const deduction = chargedValue - paidValue;

      setSummary({
        ...summary,
        expected: chargedValue,
        paid: paidValue,
        deduction: deduction,
        balance: paidValue,
        toPayOrReceive: paidValue * 0.05, // 5% of paid value
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <BackButton />
          <Typography variant="h4" gutterBottom sx={{ ml: 2 }}>
            Gestão Financeira
          </Typography>
        </Box>

        {/* Form 1 - Invoice Form */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Formulário de Preenchimento
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Pesquisar Empresa do Cadastro"
                value={form1Data.company}
                onChange={handleForm1Change('company')}
              >
                {companies.map((company) => (
                  <MenuItem key={company.id} value={company.name}>
                    {company.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mês de Competência"
                placeholder="Ex.: 5/2023"
                value={form1Data.competenceMonth}
                onChange={handleForm1Change('competenceMonth')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Data de entrega da fatura"
                value={form1Data.deliveryDate}
                onChange={(newValue) => {
                  setForm1Data({ ...form1Data, deliveryDate: newValue });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Tipo"
                value={form1Data.type}
                onChange={handleForm1Change('type')}
              >
                <MenuItem value="FATURA">FATURA</MenuItem>
                <MenuItem value="RECURSO">RECURSO</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Convênio"
                value={form1Data.agreement}
                onChange={handleForm1Change('agreement')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Lote"
                placeholder="Ex.: 52802/52803 ou VARIOS"
                value={form1Data.batch}
                onChange={handleForm1Change('batch')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Valor Cobrado (R$)"
                value={form1Data.chargedValue}
                onChange={handleForm1Change('chargedValue')}
                type="number"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Form 2 - Payment Form */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Informações de Pagamento
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mês de Competência"
                placeholder="Ex.: 7/2023"
                value={form2Data.competenceMonth}
                onChange={handleForm2Change('competenceMonth')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Data de Pagamento"
                value={form2Data.paymentDate}
                onChange={(newValue) => {
                  setForm2Data({ ...form2Data, paymentDate: newValue });
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Valor Pago (R$)"
                value={form2Data.paidValue}
                onChange={handleForm2Change('paidValue')}
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Convênio"
                value={form2Data.agreement}
                onChange={handleForm2Change('agreement')}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Summary Section */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Resumo Financeiro
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Previsão</TableCell>
                  <TableCell>Pago</TableCell>
                  <TableCell>Glosa</TableCell>
                  <TableCell>Saldo</TableCell>
                  <TableCell>Valor a Pagar/Receber</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>R$ {summary.expected.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell>R$ {summary.paid.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell>R$ {summary.deduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell>R$ {summary.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell>R$ {summary.toPayOrReceive.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
};

export default FinancialManagement; 