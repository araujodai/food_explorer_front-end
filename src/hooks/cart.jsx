import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);

  function handleAddToCart({ data, quantity }) {
    const { id, image, name, price } = data;

    const repeatedItem = cart.find(item => item.id === id);

    if (repeatedItem) {
      const updatedQuantity = repeatedItem.quantity + quantity;

      const updatedItem = { 
        ...repeatedItem,
        quantity: updatedQuantity 
      };
      
      const updatedCart = cart.filter(item => item.id !== updatedItem.id);

      setCart([...updatedCart, updatedItem]);
      localStorage.setItem("@foodexplorer:cart", JSON.stringify([...updatedCart, updatedItem]));

    } else {
      const newItem = { id, image, name, price, quantity };

      setCart([...cart, newItem]);
      localStorage.setItem("@foodexplorer:cart", JSON.stringify([...cart, newItem]));
    };
  };

  function handleRemoveFromCart(itemId) {
    const updatedCart = cart.filter(item => item.id !== itemId);

    setCart(updatedCart);
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(updatedCart));
  };

  function handleEmptyCart() {
    setCart([]);
    localStorage.removeItem("@foodexplorer:cart");
  };

  useEffect(() => {
    const hasItemsInCart = JSON.parse(localStorage.getItem("@foodexplorer:cart"));

    if (hasItemsInCart) {
      setCart(hasItemsInCart);

    } else {
      setCart([]);
    };
  }, []);

  return (
    <CartContext.Provider value={{ 
      cart,
      handleAddToCart,
      handleRemoveFromCart,
      handleEmptyCart
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