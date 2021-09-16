import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./ItemDetail.css';

function ItemDetail({item}) {
    return (
    <div className="card estiloCardDetail" >
        <p>Vista detallada</p>
        <img src={item.pictureUrl} className="card-img-top estiloImgCardDetail" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Precio: {item.price}</p>
        </div>
    </div>
    )
	}


export default ItemDetail;