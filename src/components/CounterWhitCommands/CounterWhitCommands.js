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
  const miFuncionRestar = () => {
      if (count <= 0) {
        console.log(count)
      }else{
        setCount(count - 1)
      }
  }
  const miFuncionSumar = () => {
    if (count == stock) {
      alert('No hay stock')
      console.log("Se deshabilita")
      document.getElementById("btnSumar").disabled = true;
    }else{
      console.log("habilitado")
      document.getElementById("btnSumar").disabled = false;
      setCount(count + 1)
    }
}
   
     return (
         
       <div className="divCounter">
          <button className="btnCounter" onClick={miFuncionRestar}>-</button>
            <h5 className="txtCantidad">{count}</h5>
          <button id="btnSumar" className="btnCounter" onClick={miFuncionSumar}>+</button>
          
       </div>
     )
   }

   export default CounterWhitCommands;