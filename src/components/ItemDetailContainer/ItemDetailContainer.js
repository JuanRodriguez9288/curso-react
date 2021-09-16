import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import estilo from'./ItemDetailContainer.css';

const listaDeItemsDetail = [
    {id:'01', title:'Bonsai Hokidachi', price:'U$S 60', pictureUrl:'https://t2.ev.ltmcdn.com/es/posts/0/3/6/hokidachi_2630_11_600.jpg'},
    {id:'02', title:'Bonsai Sokan', price:'U$S 45', pictureUrl:'https://t2.ev.ltmcdn.com/es/posts/0/3/6/sokan_o_sankan_2630_12_600.jpg'},
    {id:'03', title:'Bonsai Komono', price:'U$S 82', pictureUrl:'https://t2.ev.ltmcdn.com/es/posts/0/3/6/bonsai_komono_2630_4_600.jpg'},
    {id:'04', title:'Bonsai Ne Agari', price:'U$S 55', pictureUrl:'https://t1.ev.ltmcdn.com/es/posts/0/3/6/ne_agari_o_neagari_2630_17_600.jpg'},
    {id:'05', title:'Bonsai Arce Rojo', price:'U$S 125', pictureUrl:'https://estaticos.qdq.com/swdata/photos/749/749963271/arce-rojo.jpg'},
        
]
function getItem(ListDetail){
        return new Promise((resolve, reject) => {
          setTimeout (() => resolve(ListDetail), 2000)
      })
      }

function ItemDetailContainer() {
    const [listaBonsai, setListaBonsai] = useState ([])

    useEffect(()=>{
    const list= getItem(listaDeItemsDetail)
    console.log(list)
    list.then(list =>{
        setListaBonsai(list)
     })
    },[])
    return (
        <>
    <div className="groupCardDetail">
    
        {listaBonsai.map(itemBonsai => <a key={itemBonsai.id}><ItemDetail item={itemBonsai}></ItemDetail></a>)}
    
    </div>
      </>
      )
}

export default ItemDetailContainer;