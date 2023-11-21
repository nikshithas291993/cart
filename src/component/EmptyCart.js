import Typography from '@mui/material/Typography';
import GoBackBtn from './ui/GoBackBtn';

const EmptyCart = () => (
  <>
    <Typography variant='h5' align='center' sx={{ my: 5 }}>
      No Products In the Cart
    </Typography>
    <GoBackBtn />
  </>
);

export default EmptyCart;
