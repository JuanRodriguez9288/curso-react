import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    {id:'01', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Hokidachi',stock:20,  price:60, pictureUrl:imghokidachi},
    {id:'02', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai Sokan', stock:12, price:45, pictureUrl:imgsokan},
    {id:'03', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Komono', stock:10, price:82, pictureUrl:imgkomono},
    {id:'04', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Ne Agari', stock:3, price:55, pictureUrl:imgneagari},
    {id:'05', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Arce Rojo', stock:5, price:125, pictureUrl:imgarcerojo},
    {id:'06', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai de Ciprés', stock:6,  price:95, pictureUrl:imgdecipres},
    
    ]
function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 1000)
      })
      }

function ItemDetailContainer() {
    const { idCat } = useParams ()
    const [listaBonsaiPorCat, setListaBonsaiPorCat] = useState ([])
    console.log(idCat)
    useEffect(()=>{
        const list= getItem(listaDeItems)
        console.log(list)
        list.then(result =>{
            console.log(idCat)
            const products = result.filter(prod =>  prod.idCat === idCat)
            setListaBonsaiPorCat(products)
     })
     return (()=>{
        setListaBonsaiPorCat([])
     })
    },[idCat])
    if(listaBonsaiPorCat.length === 0){
        return <div className="imgBg ">
            <div className="groupCardDetail centrar">
            <img className="gif" src={loadingif} alt="logo" />
            </div>
        </div>
        }
    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail centrarPocosItems">
            {listaBonsaiPorCat.map(itemBonsai => <a key={itemBonsai.id}><ItemDetail item={itemBonsai}></ItemDetail></a>)}
            </div>
        </div>
        </>
      )
}

export default ItemDetailContainer;