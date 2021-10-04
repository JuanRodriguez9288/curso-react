import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import estilo from'./Item.css';
import { Link, NavLink } from 'react-router-dom'

function Item({item}) {
    return(
        <div>
            <Link to={`/productdetail/${item.id}`} className="card bg-transparent estiloCardList" key={item.id}>{item.title}</Link>
            {/* <li>{item.title}</li>  */}
        </div>
               
    );
}


export default Item;

