import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logoNavBar from './logoprueba.png';
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
      <nav className='NavBar' className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className='estiloImgLogo' src={logoNavBar} alt="logo" />
          <a className="navbar-brand" href="#">BonsaiClub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
        
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nuestros productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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