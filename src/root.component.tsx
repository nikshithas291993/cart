import Cart from "./component/Cart.js"
import { CartProvider } from "../src/context/CartContext.js"
export default function Root(props) {
  return (
    <div>
      <CartProvider>
        <Cart/>
        </CartProvider>
    </div>
  );
}
