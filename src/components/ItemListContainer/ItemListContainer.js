import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import estilo from './ItemListContainer.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const listaDeItems = [
    {id:'01', category:'Tipo Shonin', title:'Bonsai Hokidachi', stock:20,  price:60, pictureUrl:''},
    {id:'02', category:'Tipo Chumono', title:'Bonsai Sokan', stock:12, price:45, pictureUrl:''},
    {id:'03', category:'Tipo Shonin', title:'Bonsai Komono', stock:10, price:82, pictureUrl:''},
    {id:'04', category:'Tipo Omono', title:'Bonsai Ne Agari', stock:3, price:55, pictureUrl:''},
    {id:'05', category:'Tipo Omono', title:'Bonsai Arce Rojo', stock:5, price:125, pictureUrl:''},
    {id:'06', category:'Tipo Chumono', title:'Bonsai de Ciprés', stock:6, price:95, pictureUrl:''},
    
    ]


function ItemListContainer(props) {
    console.log(props);
	return (
    <>
    <div className="imgBg">
        <h4 style={{color:'rgba(59, 59, 59, 0.931)'}} className="item" href="#">Listado de productos</h4>
            {props.children}
         <div className="groupCardDetail">
            <ItemList items={listaDeItems}/>
        </div>
        {/* <div>
             <CounterWhitCommands />
        </div> */}
    
    </div>
    
  </>
  )
}

export default ItemListContainer;