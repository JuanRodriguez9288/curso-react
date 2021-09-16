import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Item({item}) {
    return(
        <li >{item.title}</li>        
    );
}


export default Item;

