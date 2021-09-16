import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';
import imghokidachi from './bonsaihokidachi.jpg'
import imgsokan from './bonsaisokan.jpg'
import imgkomono from './bonsaikomono.jpg'
import imgneagari from './bonsaineagari.webp'
import imgarcerojo from './bonsaiarcerojo.jpg'

const listaDeItemsDetail = [
    {id:'01', title:'Bonsai Hokidachi', price:'U$S 60', pictureUrl:imghokidachi},
    {id:'02', title:'Bonsai Sokan', price:'U$S 45', pictureUrl:imgsokan},
    {id:'03', title:'Bonsai Komono', price:'U$S 82', pictureUrl:imgkomono},
    {id:'04', title:'Bonsai Ne Agari', price:'U$S 55', pictureUrl:imgneagari},
    {id:'05', title:'Bonsai Arce Rojo', price:'U$S 125', pictureUrl:imgarcerojo},
        
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
    <div className="groupCardDetail">
    
        {listaBonsai.map(itemBonsai => <a key={itemBonsai.id}><ItemDetail item={itemBonsai}></ItemDetail></a>)}
    
    </div>
      </>
      )
}

export default ItemDetailContainer;