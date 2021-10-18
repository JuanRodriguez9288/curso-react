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
  function removeItemAutoWhen0 ( arr, item ) {
    if(item.quantity === 0){
        var i = arr.indexOf( item );
 
        if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
    }
}
    
    
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

    function totalPriceCart(itemsInCart){
      let total=0;
      let allTotalprices = itemsInCart;
      allTotalprices.forEach(function(a){total += a.totalPrice;});
      
      return total;
      
    }
  
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
          removeItemAutoWhen0,
          restCantItem,
          setProductsCart,
          totalPriceCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );

}