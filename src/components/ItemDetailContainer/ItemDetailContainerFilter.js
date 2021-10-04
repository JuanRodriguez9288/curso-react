import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {doc, getDoc} from 'firebase/firestore'
import loadingif from '../images/loading2.gif';
import imghokidachi from '../images/bonsaihokidachi.jpg'
import imgsokan from '../images/bonsaisokan.jpg'
import imgkomono from '../images/bonsaikomono.jpg'
import imgneagari from '../images/bonsaineagari.webp'
import imgarcerojo from '../images/bonsaiarcerojo.jpg'
import imgdecipres from '../images/bonsaidecipres.jpg'

// const listaDeItems = [
//     {id:'01', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Hokidachi', price:60, stock:20, pictureUrl:imghokidachi},
//     {id:'02', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai Sokan', price:45, stock:12, pictureUrl:imgsokan},
//     {id:'03', idCat:'TipoShonin', category:'Tipo Shonin', title:'Bonsai Komono', price:82, stock:10, pictureUrl:imgkomono},
//     {id:'04', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Ne Agari', price:55, stock:3, pictureUrl:imgneagari},
//     {id:'05', idCat:'TipoOmono', category:'Tipo Omono', title:'Bonsai Arce Rojo', price:125, stock:5, pictureUrl:imgarcerojo},
//     {id:'06', idCat:'TipoChumono', category:'Tipo Chumono', title:'Bonsai de Ciprés', price:95,stock:6,  pictureUrl:imgdecipres},
    
//     ]
// function getItem(ListDetail){
//         return new Promise((resolve, reject) => {
//           setTimeout (() => resolve(ListDetail), 1000)
//       })
//       }

function ItemDetailContainerFilter() {
    const { id } = useParams ()
    const [bonsai, setBonsai] = useState (undefined)
    const [loading, setLoading] = useState(true)
    
    console.log('idRecibido')
    console.log(id)
    console.log('idRecibido')
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'listaDeBonsai' , id)).then((querySnapshot) => {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            console.log('itemIndividual')
            console.log(id)
            console.log(product)
            console.log('itemIndividual')
            setBonsai(product)
        }).catch((error) => {
            console.log('Error searching items', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setBonsai(undefined)
        })
    },[id])


    // useEffect(()=>{
        
        
    //     const list= getItem(listaDeItems)
    //     console.log(list)
    //     list.then(result =>{
    //         console.log(title)
    //         const product = result.find(prod =>  prod.title === title)
    //         setBonsai(product)
    //  })
    //  return (()=>{
    //     setBonsai(undefined)
    //  })
    // },[title])
    if(setBonsai.length === 0){
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
                <ItemDetail item={bonsai}></ItemDetail>
            </div>
        </div>
        </>
      )
}

export default ItemDetailContainerFilter;