import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {useParams} from 'react-router-dom'
import loadingif from '../images/loading2.gif';

function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 2000)
      })
      }

function ItemDetailContainer() {
    const [listaBonsai, setListaBonsai] = useState ([])
    const {idCat}= useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(!idCat) {
            setLoading(true)
            getDocs(collection(db, 'listaDeBonsai')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                
                setListaBonsai(products)
                
            }).catch((error) => {
                
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
                
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [idCat])

    
    
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