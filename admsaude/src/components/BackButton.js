import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ to = '/dashboard', sx = {} }) => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<ArrowBackIcon />}
      variant="outlined"
      sx={{ mb: 2, ...sx }}
      onClick={() => navigate(to)}
    >
      Voltar
    </Button>
  );
};

export default BackButton; 