import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';

import loadingif from '../images/loading2.gif';

function ItemDetail({item}) {
    const [quantity, setQuantity] = useState(0)
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
    const addToCart = (numberOfProductsAdd) =>{
            console.log('agregado al carrito')
            console.log(numberOfProductsAdd)
            setQuantity(numberOfProductsAdd)
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
        <h6 className="card-title">{item.category}</h6>
        <p className="card-text">Precio: {item.price}</p>
        {/* <input onKeyDown={noVocales}/> */}
        <CounterWhitCommands onConfirm={addToCart} item={item} />
        <Link to={`/cart`} className="btnCart">Ir al carrito</Link>
        </div>      
    </div>
    )
	}


export default ItemDetail;