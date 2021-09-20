import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logoNavBar from '../images/logoprueba.png';
import estilo from'./NavBar.css';
import CardWidget from '../CardWidget/cardwidget';


function NavBar(props) {
  // const [info, setInfo] = useState ('')

  useEffect ( () =>{
    
    console.log ('Después del primer renderizado')
        return () => {
          console.log ('Antes de desmontar el componente')
        }
  }, [] )
  console.log ('El componente va a ser renderizado')
  
 // const ItemListContainer = () => {
 //     console.log('Texto de prueba ItemListContainer')
 //   }
 // function ItemListContainer() {
 //     console.log('Texto de prueba ItemListContainer')
 //   }
  return (
    <>
    <div>
      <nav className='NavBar' className="navbar navbar-expand-lg navbar-light bg-transparent estiloHeader">
        <div className="container-fluid">
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
                  {props.products.map(prod => <Link key={prod.id} to={`/productdetail/${prod.title}`} activeClassName="navLink" className="dropdown-item">{prod.title}</Link>)}
                  {/* <li><Link to={`/productdetail/Bonsai Hokidachi`} className="dropdown-item" href="#">Bonsai Hokidachi</Link></li>
                  {/* {props.products.map(cat => <Link key={cat.idCat} to={`/product/${cat.category}`} activeClassName="navLink" className="dropdown-item">{cat.category}</Link>)} */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
                </a>
                <ul className="dropdown-menu estiloUl" aria-labelledby="navbarDropdown">
                  {/* {props.products.map(prod => <Link key={prod.idCat} to={`/productdetailCat/${prod.category}`} activeClassName="navLink" className="dropdown-item">{prod.category}</Link>)}
                   */}
                  <li><Link to={`/productdetailCat/TipoShonin`} className="dropdown-item" href="#">Tipo Shonin</Link></li>
                  <li><Link to={`/productdetailCat/TipoChumono`} className="dropdown-item" href="#">Tipo Chumono</Link></li>
                  <li><Link to={`/productdetailCat/TipoOmono`} className="dropdown-item" href="#">Tipo Omono</Link></li>
                 </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dónde estamos?</a>
              </li>
            </ul>
          </div>
        </div>
        <CardWidget cantidad={props.cantidad} />
        </nav>
    </div>
    </>
  )
}


export default NavBar;