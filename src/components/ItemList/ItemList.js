import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from '../Item/Item';
import estilo from'./ItemList.css';
import loadingif from '../images/loading2.gif';
import { Link, NavLink } from 'react-router-dom'


// function getList(recibe){
//       return new Promise((resolve, reject) => {
//         setTimeout (() => resolve(recibe), 500)
//     })
//     }
  
function ItemList ({items}) {
  const [listaBonsai, setListaBonsai] = useState ([])
  // useEffect(()=>{
  //   const list= items
    
  //   list.then(list =>{
  //       setListaBonsai(list)
  //    })
  //       },[])
        console.log('list')
        console.log(listaBonsai)
        console.log('list')
    if(items.length === 0){
      return <ul className="list-group list-group-flush estiloLista centrar">
          <img className="gif" src={loadingif} alt="logo" />
      </ul>
      
    }
    return (
        <ul className="list-group list-group-flush estiloLista centrar bg-transparent">
          {/* {items.map(bonsai => <Link to={`/productdetail/${bonsai.id}`} className="card bg-transparent estiloCardList" key={bonsai.id}><Item item={bonsai}></Item>aa</Link>)} */}
          {items.map(bonsai => <Item item={bonsai}></Item>)}
        
        </ul>
       )
     }
  
     export default ItemList;



