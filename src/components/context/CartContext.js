import { useState, useEffect, createContext } from 'react'
export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [productsCart, setProductsCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);



    function removeItem ( arr, item ) {
      var i = arr.indexOf( item );
   
      if ( i !== -1 ) {
          arr.splice( i, 1 );
      }
  }
    // const removeItem = (itemId) => {
    //   const newList = productsCart.filter((item) => item.id !== itemId);
    //   console.log(newList)
    //   setProductsCart(newList);
    //   console.log('1')
    //   console.log(productsCart)
    //   console.log('2')
    // };
    
    const restCantItem = (itemQuantity) => {
      setQuantity(quantity-itemQuantity);
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
          restCantItem,
          setProductsCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );









}