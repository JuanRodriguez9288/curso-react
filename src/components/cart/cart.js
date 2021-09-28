import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailInCart from '../ItemDetail/ItemDetailInCart';
import {CartContext} from '../context/CartContext'

import loadingif from '../images/loading2.gif';


function Cart() {
    const [listaProductosInCart, setlistaProductsInCart] = useState ([])
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart } = useContext(CartContext);
    console.log(productsCart)
    useEffect(()=>{
        const list= productsCart
        console.log(list)
            setlistaProductsInCart(list)
         
        },[])
    if(listaProductosInCart.length === 0){
        return <div className="imgBg ">
            <div className="groupCardDetail centrar">
                <h2>Carrito vacío</h2>
            {/* <img className="gif" src={loadingif} alt="logo" /> */}
            </div>
        </div>
        }
    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail centrarPocosItems">
            {listaProductosInCart.map(itemBonsai => <a key={itemBonsai.id}><ItemDetailInCart item={itemBonsai}></ItemDetailInCart></a>)}
            </div>
        </div>
        </>
      )
}

export default Cart;