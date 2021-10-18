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


function ItemDetailContainerFilter() {
    const { id } = useParams ()
    const [bonsai, setBonsai] = useState (undefined)
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'listaDeBonsai' , id)).then((querySnapshot) => {
            
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            
            setBonsai(product)
        }).catch((error) => {
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setBonsai(undefined)
        })
    },[id])

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