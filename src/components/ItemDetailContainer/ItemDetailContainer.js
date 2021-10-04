import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {useParams} from 'react-router-dom'
import loadingif from '../images/loading2.gif';
import imghokidachi from '../images/bonsaihokidachi.jpg'
import imgsokan from '../images/bonsaisokan.jpg'
import imgkomono from '../images/bonsaikomono.jpg'
import imgneagari from '../images/bonsaineagari.webp'
import imgarcerojo from '../images/bonsaiarcerojo.jpg'
import imgdecipres from '../images/bonsaidecipres.jpg'

// const listaDeItems = [
//     {id:'01', category:'Tipo Shonin', title:'Bonsai Hokidachi', price:60, stock:20, pictureUrl:imghokidachi},
//     {id:'02', category:'Tipo Chumono', title:'Bonsai Sokan', price:45, stock:12, pictureUrl:imgsokan},
//     {id:'03', category:'Tipo Shonin', title:'Bonsai Komono', price:82, stock:10, pictureUrl:imgkomono},
//     {id:'04', category:'Tipo Omono', title:'Bonsai Ne Agari', price:55, stock:3, pictureUrl:imgneagari},
//     {id:'05', category:'Tipo Omono', title:'Bonsai Arce Rojo', price:125, stock:5, pictureUrl:imgarcerojo},
//     {id:'06', category:'Tipo Chumono', title:'Bonsai de Ciprés', price:95, stock:6, pictureUrl:imgdecipres},
    
//     ]
function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 2000)
      })
      }

function ItemDetailContainer() {
    const [listaBonsai, setListaBonsai] = useState ([])
    const {idCat}= useParams()
    const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    // const list= getItem(listaDeItems)
    // console.log(list)
    // list.then(list =>{
    //     setListaBonsai(list)
    //  })
    // },[])
    useEffect(() => {
        if(!idCat) {
            setLoading(true)
            getDocs(collection(db, 'listaDeBonsai')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                
                setListaBonsai(products)
                console.log('nocat')
                console.log(products)
                console.log('nocat')
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'listaDeBonsai'), where('category', '==', idCat))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setListaBonsai(products)
                console.log('cat')
                console.log(products)
                console.log('cat')
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [idCat])

    console.log(listaBonsai)
    console.log('listasdiferentes')
    // console.log(listaDeItems)

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