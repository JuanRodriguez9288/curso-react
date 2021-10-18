import { useState, useEffect, createContext } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainerFilter from './components/ItemDetailContainer/ItemDetailContainerFilter';
import ItemDetailContainerFilterCat from './components/ItemDetailContainer/ItemDetailContainerFilterCat';
import Cart from './components/cart/cart';
import Login from './components/Login/Login'
import FindingOrder from './components/FindOrder/FindingOrder';
import FindOrder from './components/FindOrder/FindOrder';

import {UserContext, UserContextProvider} from './components/context/UserContext'
import { cartContext, CartContextProvider } from './components/context/CartContext'
import {db} from './components/services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {useParams} from 'react-router-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CartWidget from './components/CartWidget/CartWidget';


const App = () => {
  const [count, setCount] = useState (0)
  const [listaDeItems, setListaDeItems] = useState ([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
        setLoading(true)
        getDocs(collection(db, 'listaDeBonsai')).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
           
            setListaDeItems(products)
        }).catch((error) => {
            
        }).finally(() => {
            setLoading(false)
        })
    
        
         
}, [])

  return (
    <div className="App">
      <UserContextProvider>
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
          <Route path="/productdetail/:id">
            <ItemDetailContainerFilter/>
          </Route>
          <Route path="/productdetailCat/:category">
            <ItemDetailContainerFilterCat/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/findingorder'>
            <FindingOrder/>
          </Route>
          <Route path='/findorder/:idIntOrder'>
            <FindOrder/>
          </Route>
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
      </UserContextProvider>
        
    </div>
  );
}

export default App;