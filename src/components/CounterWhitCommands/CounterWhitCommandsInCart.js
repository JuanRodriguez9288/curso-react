import React, { useState, useEffect, useContext } from 'react'
import {CartContext} from '../context/CartContext'
import estilo from'./CounterWhitCommands.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function CounterWhitCommandsInCart({stock, initial, onClearCant, setItemCount, item}) {
  const [count, setCount] = useState (initial)
  const { quantity,totalPriceProd, changeQuantity, removeItemAutoWhen0, productsCart, setProductsCart } = useContext(CartContext);
  
  setItemCount(count)


  const handleAdd = () => {
    if (count == item.quantity) {
    }else{
      setCount(count + 1)
    }
}

  const handleRemove = () => {
      if (count <= 0) {
      }else{
        setCount(count - 1)
      }
  }

  


  const onRemoveCantToCart = () => {
    setCount(0)
    item.quantity = item.quantity - count;
    const newTotalPrice = item.price * item.quantity;
    item.totalPrice = newTotalPrice;
    removeItemAutoWhen0(productsCart, item);
    changeQuantity(quantity - count);
}
     return (
         
       <div className="divCounterInCart">
          <button className="btnCounterRemove" onClick={handleRemove} disabled={count === 0}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounterRemove" onClick={handleAdd} disabled={count === item.quantity}>+</button>
          <div>
            
            <button type="button" className="btnRemove" onClick={onRemoveCantToCart}>Eliminar</button>

          </div>
       </div>
            
        
     )
   }

   export default CounterWhitCommandsInCart;