import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import estilo from './ItemListContainer.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'


function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    const {category}= useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(!category) {
            setLoading(true)
            getDocs(collection(db, 'listaDeBonsai')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                
                setProducts(products)
                
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
                setProducts(products)
                
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [category])

	return (
    <>
    <div className="imgBg">
        <h4 style={{color:'rgba(59, 59, 59, 0.931)'}} className="item" href="#">Listado de productos</h4>
            {props.children}
         <div className="groupCardDetail">
            <ItemList items={products}/>
        </div>
    </div>
    
  </>
  )
}

export default ItemListContainer;