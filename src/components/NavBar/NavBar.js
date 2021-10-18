import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logoNavBar from '../images/logoprueba.png';
import logoUser from '../images/user.png';
import estilo from'./NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {CartContext} from '../context/CartContext'


import {UserContext} from '../context/UserContext'


function NavBar(props) {

const { quantity, changeQuantity, addItem, productsCart, setProductsCart } = useContext(CartContext);
const {userName, logout} = useContext(UserContext)
  
  const handleLogout = () => {
    logout()
  }
 
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light estiloHeader">
        <div className="navBar1 container-fluid">
          <Link to={`/`} className="estiloLink" aria-current="page" href="#"><img className='estiloImgLogo' src={logoNavBar} alt="logo" />BonsaiClub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nuestros Bonsai
                </a>
                <ul className="dropdown-menu estiloUl" aria-labelledby="navbarDropdown">
                  <li><Link to={`/productlistdetail`} className="dropdown-item" href="#">Todos nuestros Bonsai</Link></li>
                  {props.products.map(prod => <Link key={prod.id} to={`/productdetail/${prod.id}`} activeClassName="navLink" className="dropdown-item">{prod.title}</Link>)}
                  
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
                </a>
                <ul className="dropdown-menu estiloUl" aria-labelledby="navbarDropdown">
                  
                  <li><Link to={`/productdetailCat/Shonin`} className="dropdown-item" href="#">Tipo Shonin</Link></li>
                  <li><Link to={`/productdetailCat/Chumono`} className="dropdown-item" href="#">Tipo Chumono</Link></li>
                  <li><Link to={`/productdetailCat/Omono`} className="dropdown-item" href="#">Tipo Omono</Link></li>
                 </ul>
              </li>
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
              {
                userName 
                  ? <div className="widgetUserCart">
                  
                  <div className="dropdown">
                  <button className="btnUser dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className='estiloImgUser' src={logoUser} alt="user" />
                  </button>
                  <ul className="dropdown-menu h-auto widgetUserCartMenu" aria-labelledby="dropdownMenuButton1">
                  <li><p>Usuario: {userName}</p></li>
                  <li><Link to='/findingorder'><button className="btnMenuUser">Buscar compra</button></Link></li>
                  <li><button className="btnMenuUserExit" onClick={handleLogout}>Salir</button ></li>
                  </ul>
                  </div>
                  </div>
                  : <div><Link to='/login'><button className="btnLogin">Ingresar</button></Link>
                  </div>
              }
              </li>
            </ul>
          </div>
        </div>
        <div>
      </div>
      {
        userName 
                  ? <div className="widgetUserCart">
                  <div>
                  <CartWidget cantidad={quantity} />
                  </div>
                  </div>
                  : <></>
              }
        </nav>
    </div>
    </>
  )
}


export default NavBar;