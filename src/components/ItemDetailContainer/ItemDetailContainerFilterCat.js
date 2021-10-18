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


function ItemDetailContainer() {
    const {category} = useParams ()
    const [listaBonsaiPorCat, setListaBonsaiPorCat] = useState ([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(!category) {
            setLoading(true)
            getDocs(collection(db, 'listaDeBonsai')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                
                setListaBonsaiPorCat(products)
                
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'listaDeBonsai'), where('category', '==', category))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setListaBonsaiPorCat(products)
                
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [category])

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