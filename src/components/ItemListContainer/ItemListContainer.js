import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import estilo from './ItemListContainer.css';
import CounterWhitCommands from '../CounterWhitCommands/CounterWhitCommands';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const listaDeItems = [
    {id:'01', category:'Tipo Shonin', title:'Bonsai Hokidachi', price:'U$S 60', pictureUrl:''},
    {id:'02', category:'Tipo Chumono', title:'Bonsai Sokan', price:'U$S 45', pictureUrl:''},
    {id:'03', category:'Tipo Shonin', title:'Bonsai Komono', price:'U$S 82', pictureUrl:''},
    {id:'04', category:'Tipo Omono', title:'Bonsai Ne Agari', price:'U$S 55', pictureUrl:''},
    {id:'05', category:'Tipo Omono', title:'Bonsai Arce Rojo', price:'U$S 125', pictureUrl:''},
    {id:'06', category:'Tipo Chumono', title:'Bonsai de Ciprés ', price:'U$S 95', pictureUrl:''},
    
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