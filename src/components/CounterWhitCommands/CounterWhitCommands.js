import React, { useState, useEffect, useContext } from 'react'
import {CartContext} from '../context/CartContext'
import estilo from'./CounterWhitCommands.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {UserContext} from '../context/UserContext'
import { Link, NavLink } from 'react-router-dom'

function CounterWhitCommands({stock, initial, onAdd, setItemCount, item}) {
  const [count, setCount] = useState (initial)
  const { quantity,totalPriceProd, changeQuantity, addItem, productsCart, setProductsCart } = useContext(CartContext);
  const {userName, logout} = useContext(UserContext)
  
  setItemCount(count)


  const handleAdd = () => {
    if (count == item.stock) {
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

  const precioTotal = item.price * count;


const onAddtoCart = () =>{
  const productsCartId = productsCart?.map(item=> item.id)
  changeQuantity(quantity + count);
  setCount(0)
  if (productsCartId?.includes(item.id)) {
  const updateCart = productsCart?.map (i => {
      if (i.id === item.id){
        let oldPrice = i.totalPrice
        let oldQuantity = i.quantity
        return{
          ...i,
          totalPrice: precioTotal + oldPrice,
          quantity: count + oldQuantity
        }
      }else{
        return i
      }
  })
  setProductsCart(updateCart)
  }else{const newProduct = {
    ...item,
    totalPrice: precioTotal,
    quantity: count,
  };

  productsCart
    ? addItem([...productsCart, newProduct])
    : addItem([newProduct]);
} 
onAdd();
    
}
     return (
         
       <div >
         {
          userName 
          ? <div className="divCounter">
          <button className="btnCounter" onClick={handleRemove} disabled={count === 0}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounter" onClick={handleAdd} disabled={count === item.stock}>+</button>
          <div>
            <button type="button" className="btnAdd" onClick={onAddtoCart}>Agregar
            </button>
          </div></div>
           : <div><Link to='/login'><button className="btnLogin">Ingrese para comprar</button></Link>
           </div>
         }
          
       </div>
            
        
     )
   }

   export default CounterWhitCommands;