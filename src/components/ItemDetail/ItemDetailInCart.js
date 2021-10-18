import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';
import CounterWhitCommandsInCart from '../CounterWhitCommands/CounterWhitCommandsInCart';

import {CartContext} from '../context/CartContext'

import loadingif from '../images/loading2.gif';

function ItemDetailInCart({item}) {
    const {quantity,changeQuantity, addItem, IsInCart, removeItem, removeItemAutoWhen0, restCantItem, productsCart, setProductsCart} = useContext(CartContext)
    const [cart, setCart] = useState(true);
    const [itemCount, setItemCount] = useState();
    


    if(!item){
        return <div className="groupCardDetail centrar">
        <img className="gif" src={loadingif} alt="logo" />
        </div>
    }

    const onRemoveToCart = () => {
          removeItem(productsCart, item);
          restCantItem(item.quantity);
          
    }
   
    

    return (
    <div className="card bg-transparent estiloCardDetailInCart" >
        
        <img src={item.pictureUrl} className="card-img-top estiloImgCardDetail" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-title">Tipo: {item.category}</h6>
        <p className="card-text">Precio U$S: {item.price}</p>
        <p className="card-text">Agregados: {item.quantity}</p>
        <p className="card-text">Precio total U$S: {item.totalPrice}</p>
        
        <CounterWhitCommandsInCart 
        stock={item.stock}
        initial={0}
        setItemCount={setItemCount}
         item={item} />
        <button type="button" className="btnCartRemoveAll" onClick={onRemoveToCart}>Eliminar todos</button>
        
        </div>      
    </div>
    )
	}


export default ItemDetailInCart;