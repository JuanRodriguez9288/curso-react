import { useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/buttons/Button';

import CardWidget from './components/CardWidget/cardwidget';
import miFuncion from './components/NavBar/NavBar';

const App = () => {
  const [count, setCount] = useState (0)
  // const [productos, setProductos] = useState ([])

  // useEffect (() =>{
  //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
  //   .then (res => {return res.json()}).then(function(respuesta){
  //     setProductos(respuesta.results.slice(0,10))
  //   })
  // },[])
  return (
    <div className="App">
        <NavBar cantidad={count}>  
            
        </NavBar>
        {/* <ul>
          {
            productos.map(prod =>{
              return <li key={prod.id}>{prod.title}</li>
            })}
        </ul> */}
        <ItemListContainer>
        
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