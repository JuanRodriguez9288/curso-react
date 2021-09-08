import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/buttons/Button';

import CardWidget from './components/CardWidget/cardwidget';
import miFuncion from './components/NavBar/NavBar';

const App = () => {
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
    <div className="App">

      {/* { view ? <NavBar cantidad={count}></NavBar> 
             : <h1>Navbar desmontado</h1>} */}
            
        <NavBar cantidad={count}>  
            
        </NavBar>
        <ItemListContainer>
          {/* <h1>  
             {count}
          </h1>
          <button onClick={() => setCount(count + 1)} >  
              Sumar al contador
          </button>
          <button onClick={() => setCount(count - 1)}>
            Restar al contador
            </button>
          <button onClick={miFuncionRestar}>Restar hasta 0</button>
          <button onClick={miFuncionSumar}>Sumar hasta límite de stock</button>
          { count == 0 ? <h1>Contador es 0</h1> : <h1>Contador no es 0</h1>}
          <Button btntxt='comprar' count={count} /> */}
        </ItemListContainer>
    </div>
  );
}

export default App;


//contenido original
// <header className="App-header">
        
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>