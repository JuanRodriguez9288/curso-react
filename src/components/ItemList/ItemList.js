import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from '../Item/Item';


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
    return (
      <ul>
        {listaBonsai.map(bonsai => <li key={bonsai.id}><Item item={bonsai}></Item></li>)}
      </ul>
        
       )
     }
  
     export default ItemList;



