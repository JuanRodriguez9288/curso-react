import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./Item.css';

function Item({item}) {
    return(
        <div>
            <li>{item.title}</li> 
        </div>
               
    );
}


export default Item;

