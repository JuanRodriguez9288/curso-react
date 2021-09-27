
import React, { useState, useEffect, useContext } from 'react'
import {CartContext} from '../context/CartContext'
import estilo from'./CounterWhitCommands.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NotificationContext from '../context/NotificationContext';


function CounterWhitCommands({stock, initial, onAdd, setItemCount, item}) {
  const [count, setCount] = useState (initial)
  const { quantity, changeQuantity, addItem, productsCart, setProductsCart } = useContext(CartContext);
  //const {setNotification}= useContext(NotificationContext)
  // const [view, setView] = useState (true)
  // console.log(count)
  // console.log(setCount)
  // function btnDisable(valorContador){
  //   console.log('recibo'+valorContador)
  //   if (valorContador == stock) {
  //     document.getElementById("btnSumar").disabled = true;
  //   }else{
  //     document.getElementById("btnSumar").disabled = false;
  //   }
  // }
  // useEffect(() => {
  //   changeQuantity(count);
  // }, [count]);
  setItemCount(count)


  const handleAdd = () => {
    if (count == item.stock) {
    }else{
      setCount(count + 1)
      changeQuantity(quantity + 1);
    }
}

  const handleRemove = () => {
      if (count <= 0) {
      }else{
        setCount(count - 1)
        changeQuantity(quantity - 1);
      }
  }
  

const onAddtoCart = () =>{
  const productsCartId = productsCart?.map(item=> item.id)

  if (productsCartId?.includes(item.id)) {
  const updateCart = productsCart?.map (i => {
      if (i.id === item.id){

        let oldQuantity = i.quantity
        return{
          ...i,
          quantity: count + oldQuantity
        }
      }else{
        return i
      }
  })
  setProductsCart(updateCart)
  }else{const newProduct = {
    ...item,
    quantity: count,
  };

  productsCart
    ? addItem([...productsCart, newProduct])
    : addItem([newProduct]);
} 
onAdd();
console.log(productsCart)
console.log(quantity)
    
}
     return (
         
       <div className="divCounter">
          <button className="btnCounter" onClick={handleRemove} disabled={count === 0}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounter" onClick={handleAdd} disabled={count === item.stock}>+</button>
          <div>
            {/* <button type="button" className="btnAdd" onClick={()=> onConfirm(count)}>Agregar</button> */}
            <button type="button" className="btnAdd" onClick={onAddtoCart}>Agregar</button>

          </div>
       </div>
            
        
     )
   }

   export default CounterWhitCommands;