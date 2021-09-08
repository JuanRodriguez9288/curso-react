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
    }else{
      setCount(count + 1)
    }
}

   
     return (
         
       <div className="divCounter">

          <button onClick={miFuncionRestar}>Restar hasta 0</button>
            <h1>{count}</h1>
          <button onClick={miFuncionSumar}>Sumar hasta límite de stock</button>
          
       </div>
     )
   }

   export default CounterWhitCommands;