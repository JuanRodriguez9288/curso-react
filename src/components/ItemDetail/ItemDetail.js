import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import {CartContext} from '../context/CartContext'
import {UserContext} from '../context/UserContext'
import loadingif from '../images/loading2.gif';

function ItemDetail({item}) {
    const {quantity, addItem, IsInCart} = useContext(CartContext)
    const [cart, setCart] = useState(true);
    const [itemCount, setItemCount] = useState();
    const {userName} = useContext(UserContext)
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
        <p>Vista detallada</p>
        <img src={item.pictureUrl} className="card-img-top estiloImgCardDetail" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-title">Tipo: {item.category}</h6>
        <p className="card-text">Precio U$S: {item.price}</p>
        
        <CounterWhitCommands 
        stock={item.stock}
        initial={0}
        setItemCount={setItemCount}
        onAdd={addToCart}
         item={item} />
         {
             userName
             ?<div>
                <Link to={`/cart`} className="btn btnCart" onClick={handleOnClick}>Ir al carrito</Link>
             </div>
             :<></>
         }
        
        </div>      
    </div>
    )
	}


export default ItemDetail;