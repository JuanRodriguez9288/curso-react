import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from '../Item/Item';
import estilo from'./ItemList.css';
import loadingif from '../images/loading2.gif';
import { Link, NavLink } from 'react-router-dom'


function getList(recibe){
      return new Promise((resolve, reject) => {
        setTimeout (() => resolve(recibe), 3000)
    })
    }
  
function ItemList ({items}) {
  const [listaBonsai, setListaBonsai] = useState ([])
  useEffect(()=>{
    const list= getList(items)
    console.log(list)
    list.then(list =>{
        setListaBonsai(list)
     })
        },[])
    if(listaBonsai.length === 0){
      return <ul className="list-group list-group-flush estiloLista centrar">
          <img className="gif" src={loadingif} alt="logo" />
      </ul>
      
    }
    return (
        <ul className="list-group list-group-flush estiloLista centrar bg-transparent">
          {listaBonsai.map(bonsai => <Link to={`/productdetail/${bonsai.title}`} className="list-group-item estiloItemsLista" key={bonsai.id}><Item item={bonsai}></Item></Link>)}
        </ul>
       )
     }
  
     export default ItemList;



