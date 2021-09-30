import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailInCart from '../ItemDetail/ItemDetailInCart';
import {CartContext} from '../context/CartContext'

import { Link, NavLink } from 'react-router-dom'
import loadingif from '../images/loading2.gif';


function Cart() {
    const [listaProductosInCart, setlistaProductsInCart] = useState ([])
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart, removeItem, clear } = useContext(CartContext);
    console.log(productsCart)
    useEffect(()=>{
        const list= productsCart
        console.log(list)
            setlistaProductsInCart(list)
        },[])
    if(listaProductosInCart.length === 0){
        return <div className="imgBg ">
            <div className="groupCardDetail centrar">
                <h2>Carrito vacío</h2>
                <Link to={`/productlistdetail`} className="btn btnCart">Volver a la tienda</Link>
        
            {/* <img className="gif" src={loadingif} alt="logo" /> */}
            </div>
        </div>
        }

        
        const OnClearToCart = () => {
                clear();
                setlistaProductsInCart([]);
                console.log('entraclear')
      }

        
    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail centrarPocosItems">
            {listaProductosInCart.map(itemBonsai => <a key={itemBonsai.id}><ItemDetailInCart item={itemBonsai}></ItemDetailInCart></a>)}
            </div>
            <button type="button" className="" onClick={OnClearToCart}>Vaciar carrito</button>

        </div>
        </>
      )
}

export default Cart;