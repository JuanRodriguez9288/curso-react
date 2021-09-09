import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import estilo from'./ItemListContainer.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';




function ItemListContainer(props) {
    console.log(props);
	return (
    <>
    <div className="imgBg">
        <a className="item" href="#">Listado de productos</a>
    <ul class="menu">
        <li><a class="item" href="#">Producto 1</a></li>
        <li><a class="item" href="#">Producto 2</a></li>
        <li><a class="item" href="#">Producto 3</a></li>
    </ul>
    {props.children}
    <CounterWhitCommands />
    </div>
    
  </>
  )
}

export default ItemListContainer;