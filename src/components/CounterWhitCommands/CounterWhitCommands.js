import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./CounterWhitCommands.css';


const CounterWhitCommands = () => {
  const [count, setCount] = useState (0)
  // const [view, setView] = useState (true)
  const stock = 10
  console.log(count)
  console.log(setCount)

  // function btnDisable(valorContador){
  //   console.log('recibo'+valorContador)
  //   if (valorContador == stock) {
  //     document.getElementById("btnSumar").disabled = true;
  //   }else{
  //     document.getElementById("btnSumar").disabled = false;
  //   }
  // }
  const miFuncionRestar = () => {
      
      if (count <= 0) {
        console.log(count)
      }else{
        setCount(count - 1)
        // btnDisable(count - 1);
      }
      
  }
  const miFuncionSumar = () => {
    
    if (count == stock) {
      console.log(count)
    }else{
      setCount(count + 1)
      // btnDisable(count + 1);
    }
    
}
   
     return (
         
       <div className="divCounter">
          <button className="btnCounter" onClick={miFuncionRestar} disabled={count === 0}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounter" onClick={miFuncionSumar} disabled={count === stock}>+</button>
          
       </div>
     )
   }

   export default CounterWhitCommands;