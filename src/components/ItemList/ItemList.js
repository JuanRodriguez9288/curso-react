import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from '../Item/Item';

  
function ItemList ({items}) {
    const [listaBonsai, setListaBonsai] = useState ([])
    function getList(){
      
    return new Promise((resolve, reject) => {
      setTimeout (() => resolve(items), 3000)
    })
    }
     useEffect(()=>{
    const list= getList()
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



