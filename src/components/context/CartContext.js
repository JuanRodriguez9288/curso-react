import { useState, useEffect, createContext } from 'react'
export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [productsCart, setProductsCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const removeItem = (itemId) => {
      
      const newList = productsCart.filter((item) => item.id !== itemId);
      setProductsCart(newList);

    };
  
    const changeQuantity = (count) => {
        setQuantity(count);
    };
    const changeTotalPriceProd = (priceTotal) => {
      setTotalPrice(priceTotal);
  };
  
    const clear = () => {
      setProductsCart(undefined);
      setQuantity(0); 
      setProductsCart([]);
    };
  
    const addItem = (item, quantity) => {
      setProductsCart(item, quantity);
    };
  
    return (
      <CartContext.Provider
        value={{
          productsCart,
          addItem,
          clear,
          changeQuantity,
          changeTotalPriceProd,
          quantity,
          totalPrice,
          removeItem,
          setProductsCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );









}