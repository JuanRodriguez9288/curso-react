import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {CartContext} from '../context/CartContext'
//import NotificationContext from '../context/NotificationContext';
import loadingif from '../images/loading2.gif';

function ItemDetailInCart({item}) {
    const {quantity, addItem, IsInCart} = useContext(CartContext)
    const [cart, setCart] = useState(true);
    const [itemCount, setItemCount] = useState();
    //const {setNotification}= useContext(NotificationContext)
    // const clickEnImagen = (ev) =>{
    //     alert('click')
    //     console.log(ev)
    //     ev.stopPropagation()
    //     console.log('click en la imagen')
    // }
    // const noVocales = (ev) =>{
    //     if(ev.key.toLowerCase() =='a' || ev.key.toLowerCase() =='e') {
    //         ev.preventDefault()
    //     }else{ 
    //         console.log(ev.key)
    //     }
    // }
    const addToCart = () =>{
        setCart(false);
    }
        const handleOnClick = () => {
          setCart(true);
        }


    if(!item){
        return <div className="groupCardDetail centrar">
        <img className="gif" src={loadingif} alt="logo" />
        </div>
    }
    return (
    <div className="card bg-transparent estiloCardDetail" >
        <p>Producto en carrito</p>
        <img src={item.pictureUrl} className="card-img-top estiloImgCardDetail" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-title">{item.category}</h6>
        <p className="card-text">Precio: {item.price}</p>
        <p className="card-text">Agregados: {item.quantity}</p>
        {/* <input onKeyDown={noVocales}/> */}
        
        </div>      
    </div>
    )
	}


export default ItemDetailInCart;