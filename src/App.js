import { useState, useEffect, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainerFilter from './components/ItemDetailContainer/ItemDetailContainerFilter';
import ItemDetailContainerFilterCat from './components/ItemDetailContainer/ItemDetailContainerFilterCat';
import Cart from './components/cart/cart';
import { UserContext } from './components/context/UserContext'
import { cartContext, CartContextProvider } from './components/context/CartContext'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CardWidget from './components/CardWidget/cardwidget';
import miFuncion from './components/NavBar/NavBar';
import imghokidachi from '../src/components/images/bonsaihokidachi.jpg'
import imgsokan from '../src/components/images/bonsaisokan.jpg'
import imgkomono from '../src/components/images/bonsaikomono.jpg'
import imgneagari from '../src/components/images/bonsaineagari.webp'
import imgarcerojo from '../src/components/images/bonsaiarcerojo.jpg'
import imgdecipres from '../src/components/images/bonsaidecipres.jpg'
import {NotificationContextProvider} from './components/context/NotificationContext'
const listaDeItems = [
    {id:'01', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Hokidachi', stock:20, price:'U$S 60', pictureUrl:imghokidachi},
    {id:'02', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai Sokan', stock:12, price:'U$S 45', pictureUrl:imgsokan},
    {id:'03', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Komono', stock:10, price:'U$S 82', pictureUrl:imgkomono},
    {id:'04', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Ne Agari', stock:3, price:'U$S 55', pictureUrl:imgneagari},
    {id:'05', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Arce Rojo', stock:5, price:'U$S 125', pictureUrl:imgarcerojo},
    {id:'06', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai de Ciprés', stock:6, price:'U$S 95', pictureUrl:imgdecipres},
    
    ]


//export const UserContext = createContext()
const App = () => {
  const [count, setCount] = useState (0)
  const [user, setUser] = useState (undefined)

  useEffect(()=>{
    setTimeout(()=>{
      setUser('pruebacontexto')
    }, 5000)
  },[])




  // const [productos, setProductos] = useState ([])
  // const [input, setInput] = useState ('')
  // useEffect (() =>{
  //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
  //   .then (res => {return res.json()}).then(function(respuesta){
  //     setProductos(respuesta.results.slice(0,10))
  //   })
  // },[])

  // const handleForm = (event) => {
  //   event.preventDefault()
  //   fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
  //   .then (res => {return res.json()})
  //   .then(function(respuesta){
  //   setProductos(respuesta.results.slice(0,10))
  //   })}

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
       <NavBar cantidad={count} products={listaDeItems}></NavBar>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/productlistdetail">
          <ItemDetailContainer/>
          </Route>
          <Route path="/productdetail/:title">
          <ItemDetailContainerFilter/>
          </Route>
          <Route path="/productdetailCat/:idCat">
          <ItemDetailContainerFilterCat/>
          </Route>
          <Route path="/cart">
          <Cart/>
          </Route>
      
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
        {/* <div>
          <form onSubmit={handleForm}>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button type="submit">Buscar</button>
          </form>
        </div>
        <ul>
          {
            productos.map(prod =>{
              return <li key={prod.id}>{prod.title}</li>
            })}
        </ul> */}

        {/* <ItemListContainer>
        
        </ItemListContainer> */}
        
    </div>
  );
}

export default App;