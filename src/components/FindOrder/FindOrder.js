import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, NavLink } from 'react-router-dom'
import {db} from '../services/firebase/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {doc, getDoc} from 'firebase/firestore'


function FindOrder() {
    const {idIntOrder} = useParams ()
    const [orderFound, setOrderFound] = useState ()
    const [loading, setLoading] = useState(true)
    const [exist, setExist] = useState(false)
    const [buyerFound, setBuyerFound] = useState()
    const [hourFound, setHourFound] = useState()
    const [dateFound, setDateFound] = useState()
    const [statusFound, setStatusFound] = useState()
    const [totalPriceFound, setTotalPriceFound] = useState()
    
    useEffect(() => {
        if(!idIntOrder) {
            
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'orders'), where('codBuy', '==', idIntOrder))).then((querySnapshot) => {
                const ordenesFiltradas = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                if(ordenesFiltradas.length>0){
                    setExist(true)
                }else{
                    setExist(false)
                    
                }
                
                setStatusFound(ordenesFiltradas[0]['status'])
                setBuyerFound(ordenesFiltradas[0]['buyer'])
                setTotalPriceFound(ordenesFiltradas[0]['total'])
            
                const dateTimeStamp = ordenesFiltradas[0]['date'];
                const dateForUser = new Date(dateTimeStamp);
                
                const hora = dateForUser.toTimeString();
                const fecha = dateForUser.toDateString();
                setHourFound(hora)
                setDateFound(fecha)
                
               
            }).catch((error) => {
                
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [idIntOrder])
    if(!exist){
        return <div className="imgBg ">
            <div className="groupCardDetail centrar">
            <h5>En código de compra no existe, vuelva a intentarlo</h5>
            <Link to={`/findingorder`}><button className="btnFindOrder">Volver</button></Link>
            </div>
            
        </div>
    }
    return (
        <>
        <div className="imgBgFindOrder">
            <div className="groupCardDetail centrar">
                <ul className="estiloListaInfoOrder">
                <li><h5>Información de su compra</h5></li>
                <li><h5>Estado: {statusFound}</h5> </li>
                <li><h6>Comprador: {buyerFound}</h6></li>
                <li><h6>Total U$S: {totalPriceFound}</h6></li>
                <li><h6>Fecha: {dateFound}</h6></li>
                <li><h6>Hora: {hourFound}</h6></li>
                <li><h5><Link to={`/findingorder`}><button className="btnFindOrder">Volver</button></Link></h5></li>
                </ul>
            </div>
        </div>
        
           
        </>
      )
}

export default FindOrder;