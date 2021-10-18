import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, NavLink } from 'react-router-dom'
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {doc, getDoc} from 'firebase/firestore'
import estilo from'./FindOrder.css';

function FindingOrder() {
    const [codBuy, setCodBuy] = useState('')
    //
    const orderFinded = () => {
        const codBuyInput = document.getElementById("inputCodigo").value;
        setCodBuy(codBuyInput)
    }
    return (
        <>
        <div className="imgBgFindOrder">
        <div className="estiloLista centrar bg-transparent">
        <h5>Por favor ingrese el código de su compra para ver el estado</h5>
        <br></br>
        <input onChange={() => orderFinded()} className="findInput" type="text" id="inputCodigo" placeholder="Código de compra"></input>
        {
          codBuy 
            ? <Link to={`/findorder/${codBuy}`} ><button className="btnFindOrder">Buscar</button></Link>
            : <Link to={`/findorder/noingresado`} ><button className="btnFindOrder">Buscar</button></Link>
        }
    </div>
    </div>
        </>
      )
}

export default FindingOrder;