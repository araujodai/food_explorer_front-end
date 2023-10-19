import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ cartItems, setCartItems ] = useState(0);

  function handleAddToCart({ data, quantity }) {
    const { id, image, name, price } = data;
    const cartItem = { id, image, name, price, quantity };
    setCart([...cart, cartItem]);
  };

  function handleRemoveFromCart(itemId) {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    const amount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItems(amount);
  }, [cart]);

  return (
    <CartContext.Provider value={{ 
      cart,
      cartItems,
      handleAddToCart,
      handleRemoveFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  
  return context;
}

export { CartProvider, useCart };