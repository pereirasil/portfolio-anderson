import React, { useState } from 'react';
import { Box, Typography, Breadcrumbs, Link, Paper, Button, Snackbar, IconButton } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import AppBarWithLogout from './AppBarWithLogout';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const initialRows = [
  { id: 1, tipo: 'Conciliação', empresa: 'Empresa 1', mesAno: '05/2023', prestador: 'Prestador A', valor: 5000 },
  { id: 2, tipo: 'Previsão', empresa: 'Empresa 2', mesAno: '06/2023', prestador: 'Prestador B', valor: 3000 },
  { id: 3, tipo: 'À Receber', empresa: 'Empresa 3', mesAno: '07/2023', prestador: 'Prestador C', valor: 2000 },
  { id: 4, tipo: 'Conciliação', empresa: 'Empresa 1', mesAno: '08/2023', prestador: 'Prestador D', valor: 7000 },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70, editable: false },
  { field: 'tipo', headerName: 'Tipo', width: 120, editable: true },
  { field: 'empresa', headerName: 'Empresa', width: 150, editable: true },
  { field: 'mesAno', headerName: 'Mês/Ano', width: 110, editable: true },
  { field: 'prestador', headerName: 'Prestador', width: 150, editable: true },
  { field: 'valor', headerName: 'Valor (R$)', width: 120, type: 'number', editable: true },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Ações',
    width: 100,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DeleteIcon color="error" />}
        label="Excluir"
        onClick={() => params.row.onDelete(params.row.id)}
      />
    ],
  },
];

const Lancamentos = () => {
  const [rows, setRows] = useState(initialRows);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [editedRows, setEditedRows] = useState({});

  // Adiciona função de exclusão a cada linha
  const rowsWithDelete = rows.map((row) => ({ ...row, onDelete: handleDelete }));

  function handleDelete(id) {
    setRows((prev) => prev.filter((row) => row.id !== id));
    setSnackbar({ open: true, message: 'Lançamento excluído!' });
  }

  function processRowUpdate(newRow, oldRow) {
    setEditedRows((prev) => ({ ...prev, [newRow.id]: newRow }));
    return newRow;
  }

  function handleSave() {
    // Simula salvar alterações
    const updatedRows = rows.map((row) => editedRows[row.id] || row);
    setRows(updatedRows);
    setEditedRows({});
    setSnackbar({ open: true, message: 'Alterações salvas com sucesso!' });
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', p: 0 }}>
      <AppBarWithLogout userName="Usuário" />
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 1000, mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Lançamentos Gerais
          </Typography>
        </Box>
        <Paper sx={{ p: 3, width: '100%', maxWidth: 1000 }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="/dashboard">Dashboard</Link>
            <Typography color="text.primary">Lançamentos</Typography>
          </Breadcrumbs>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rowsWithDelete}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              disableSelectionOnClick
              processRowUpdate={processRowUpdate}
              experimentalFeatures={{ newEditingApi: true }}
              editMode="row"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            sx={{ mt: 2 }}
            onClick={handleSave}
            disabled={Object.keys(editedRows).length === 0}
          >
            Salvar Alterações
          </Button>
        </Paper>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={2500}
          onClose={() => setSnackbar({ open: false, message: '' })}
          message={snackbar.message}
        />
      </Box>
    </Box>
  );
};

export default Lancamentos; 