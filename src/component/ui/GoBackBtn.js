import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GoBackBtn = () => {
  

  return (
    <Button startIcon={<ArrowBackIcon />} >
      Go Back
    </Button>
  );
};
export default GoBackBtn;
