import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';

const listaDeItemsDetail = [
    {id:'01', title:'Bonsai 1', price:'$1000', pictureUrl:'./bonsai1.png'},
    {id:'02', title:'Bonsai 2', price:'$500', pictureUrl:'./bonsai1.png'},
    {id:'03', title:'Bonsai 3', price:'$350', pictureUrl:'./bonsai1.png'},
    ]
function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 2000)
      })
      }

function ItemDetailContainer() {
    const [listaBonsai, setListaBonsai] = useState ([])

    useEffect(()=>{
    const list= getItem(listaDeItemsDetail)
    console.log(list)
    list.then(list =>{
        setListaBonsai(list)
     })
    },[])
    return (
        <>
    <div>
    <ul>
        {listaBonsai.map(itemBonsai => <li key={itemBonsai.id}><ItemDetail item={itemBonsai}></ItemDetail></li>)}
        <p></p>
    </ul>
    </div>
      </>
      )
}

export default ItemDetailContainer;