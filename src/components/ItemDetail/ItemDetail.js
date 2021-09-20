import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';

import loadingif from '../images/loading2.gif';

function ItemDetail({item}) {
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
        <CounterWhitCommands />
        </div>
    </div>
    )
	}


export default ItemDetail;