import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ cartItemId, productId, listPrice, salesPrice, quantity , productName,productImage }) => {

  return (
    <>
      <Grid container gap>
        <Grid
          item
          xs={12}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <img src={productImage}  alt={productId} height='150' width='150' />
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Typography variant='inherit'>{ productName }</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Box>
            <FormHelperText>Price</FormHelperText>
            <Typography variant='inherit'> &#8377;{ salesPrice }</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Quantity </FormHelperText>
          <Typography variant='inherit'>{quantity}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <FormHelperText>Subtotal </FormHelperText>
          <Typography variant='inherit'>
          &#8377;{ quantity * salesPrice }
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2}
          md={1}
          display='grid'
          textAlign='center'
          justifyContent='center'
          alignContent='center'
        >
          <Tooltip title='Delete' placement='top'>
            <IconButton >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default CartItem;
