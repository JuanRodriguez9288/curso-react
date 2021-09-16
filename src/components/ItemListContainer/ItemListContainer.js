import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import estilo from'./ItemListContainer.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const listaDeItems = [
    {id:'01', title:'Bonsai 1', price:'$1000', pictureUrl:'1'},
    {id:'02', title:'Bonsai 2', price:'$500', pictureUrl:'2'},
    {id:'03', title:'Bonsai 3', price:'$350', pictureUrl:'3'},
    ]


function ItemListContainer(props) {
    console.log(props);
	return (
    <>
    <div className="imgBg">
        <a className="item" href="#">Listado de productos</a>
    {props.children}
    <div className="groupCardDetail">
        <ItemList items={listaDeItems}/>
    </div>
    <div>
        <ItemDetailContainer />
    </div>
    <div>
        <CounterWhitCommands />
    </div>
    
    </div>
    
  </>
  )
}

export default ItemListContainer;