import { useState, createContext , useEffect} from 'react';
import { getUserCart } from '../../../container/src/api-helper/frontend/util';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    console.log("cart provider");
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartToTal] = useState([]);
    useEffect(() =>{
        getUserCart(1)
          .then((data) => { setCart(data.items);
           setCartToTal(data.cartTotal)})
          .catch((err) =>console.log(err));
      },[]);
    return (
       
        <CartContext.Provider
          value={{
            cart,
            setCart,
            cartTotal,
            setCartToTal
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };  