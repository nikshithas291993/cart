import { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { CartContext } from '../context/CartContext';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GoBackBtn from './ui/GoBackBtn';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);
  return (
    <>
      <h2>My Cart</h2>
      <hr />
      <br />
      {cart.length > 0 ? (
        <>
          <Container className='animate__animated animate__fadeIn'>
          {cart.map((item) => (
              <Fragment key={item.cartItemId}>
                <CartItem {...item} />
                <Divider variant='middle' sx={{ my: 3 }} />
              </Fragment>
               ))}
          </Container>

          <Typography
            variant='h6'
            align='right'
            className='animate__animated animate__fadeInUp'
          >
            Total: &#8377;{ cartTotal }
          </Typography>

          <Box display='flex' gap justifyContent={'center'} my>
            <a href="/checkout"><Button
              variant='contained'
              color='error'
              
              startIcon={<PointOfSaleIcon />}
            >
              Proceed To Checkout
            </Button></a>
          </Box>

          <GoBackBtn />
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
