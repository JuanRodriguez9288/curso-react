import { useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/buttons/Button';

import CardWidget from './components/CardWidget/cardwidget';
import miFuncion from './components/NavBar/NavBar';
const listaDeBonsais = [
  {id:'01', name:'Bonsai clase 1', desc:'Bonsai del tipo 1', stock:'10'},
  {id:'02', name:'Bonsai clase 2', desc:'Bonsai del tipo 2', stock:'2'},
  {id:'03', name:'Bonsai clase 3', desc:'Bonsai del tipo 3', stock:'4'},
]
const App = () => {
  const [count, setCount] = useState (0)
  
  return (
    <div className="App">
        <NavBar cantidad={count}>  
            
        </NavBar>
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