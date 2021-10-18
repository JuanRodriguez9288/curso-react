import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from '../Item/Item';
import estilo from'./ItemList.css';
import loadingif from '../images/loading2.gif';
import { Link, NavLink } from 'react-router-dom'

  
function ItemList ({items}) {
  const [listaBonsai, setListaBonsai] = useState ([])
  
        // alert(process.env.REACT_APP_apiKey)
    if(items.length === 0){
      return <ul className="list-group list-group-flush estiloLista centrar">
          <img className="gif" src={loadingif} alt="logo" />
      </ul>
      
    }
    return (
        <ul className="list-group list-group-flush estiloLista centrar bg-transparent">
          {items.map(bonsai => <Item item={bonsai}></Item>)}
        </ul>
       )
     }
  
     export default ItemList;



