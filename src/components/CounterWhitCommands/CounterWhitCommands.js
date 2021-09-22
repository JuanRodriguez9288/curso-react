import React from 'react'
import { useState } from 'react'
import estilo from'./CounterWhitCommands.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function CounterWhitCommands({onConfirm, item}) {
  const [count, setCount] = useState (0)
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
  const handleRemove = () => {
      if (count <= 0) {
        //console.log(count)
      }else{
        setCount(count - 1)
        // btnDisable(count - 1);
      }
  }
  const handleAdd = () => {
    if (count == item.stock) {
      //console.log(count)
      //console.log(stock)
    }else{
      setCount(count + 1)
      // btnDisable(count + 1);
    }
}
   
     return (
         
       <div className="divCounter">
          <button className="btnCounter" onClick={handleRemove} disabled={count === 0}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounter" onClick={handleAdd} disabled={count === item.stock}>+</button>
          <div>
            <button type="button" className="btnAdd" onClick={()=> onConfirm(count)}>Agregar</button>
          </div>
       </div>
            
        
     )
   }

   export default CounterWhitCommands;