import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ amount, setAmount ] = useState(1);

  function handleAddUnit() {
    if (amount < 10) {
      setAmount(prevState => prevState + 1);
    } else {
      alert("Você atingiu o máximo permitido.");
    }
  };

  function handleRemoveUnit() {
    if (amount > 1) {
      setAmount(prevState => prevState - 1);
    } else {
      alert("A quantidade mínima é de 01 unidade.");
    }
  };

  function handleAddToCart({ id, name, price}) {
    const cartItem = { id, name, price, amount };
    setCart([...cart, cartItem]);
    getTotalAmount();
    setAmount(1);
  };

  function handleRemoveFromCart(itemId) {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  function getTotalAmount() {
    return cart.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      amount,
      handleAddUnit,
      handleRemoveUnit,
      handleAddToCart, 
      handleRemoveFromCart,
      getTotalAmount 
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