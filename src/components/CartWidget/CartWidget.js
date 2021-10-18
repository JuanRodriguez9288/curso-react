import logoCart from '../images/cart3.png';
import estilo from'./CartWidget.css';
import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {CartContext} from '../context/CartContext'
const CartWidget = ({cantidad}) => {
  const [cart, setCart] = useState(true);
  const handleOnClick = () => {
    setCart(true);
}

 if (cantidad === 0) return <h5>Carrito vacio</h5>;

  return (
  	
    <div className = 'divCart'>
      <Link to={`/cart`} className="btn" onClick={handleOnClick}><img src={logoCart} alt="logo" /></Link>
      <p className="navbar-brand" href="#" >{cantidad}</p>
    </div>
  )
}

export default CartWidget