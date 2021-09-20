import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';

import loadingif from '../images/loading2.gif';
import imghokidachi from '../images/bonsaihokidachi.jpg'
import imgsokan from '../images/bonsaisokan.jpg'
import imgkomono from '../images/bonsaikomono.jpg'
import imgneagari from '../images/bonsaineagari.webp'
import imgarcerojo from '../images/bonsaiarcerojo.jpg'
import imgdecipres from '../images/bonsaidecipres.jpg'

const listaDeItems = [
    {id:'01', category:'Tipo Shonin', title:'Bonsai Hokidachi', price:'U$S 60', pictureUrl:imghokidachi},
    {id:'02', category:'Tipo Chumono', title:'Bonsai Sokan', price:'U$S 45', pictureUrl:imgsokan},
    {id:'03', category:'Tipo Shonin', title:'Bonsai Komono', price:'U$S 82', pictureUrl:imgkomono},
    {id:'04', category:'Tipo Omono', title:'Bonsai Ne Agari', price:'U$S 55', pictureUrl:imgneagari},
    {id:'05', category:'Tipo Omono', title:'Bonsai Arce Rojo', price:'U$S 125', pictureUrl:imgarcerojo},
    {id:'06', category:'Tipo Chumono', title:'Bonsai de Ciprés ', price:'U$S 95', pictureUrl:imgdecipres},
    
    ]
function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 2000)
      })
      }

function ItemDetailContainer() {
    const [listaBonsai, setListaBonsai] = useState ([])

    useEffect(()=>{
    const list= getItem(listaDeItems)
    console.log(list)
    list.then(list =>{
        setListaBonsai(list)
     })
    },[])
    if(listaBonsai.length === 0){
        return <div className="imgBg ">
            <div className="groupCardDetail centrar">
            <img className="gif" src={loadingif} alt="logo" />
            </div>
        </div>
        }
    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail">
                {listaBonsai.map(itemBonsai => <a key={itemBonsai.id}><ItemDetail item={itemBonsai}></ItemDetail></a>)}
            </div>
        </div>
        </>
      )
}

export default ItemDetailContainer;