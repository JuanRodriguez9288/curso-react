import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailInCart from '../ItemDetail/ItemDetailInCart';
import {CartContext} from '../context/CartContext'
import {UserContext} from '../context/UserContext'
import {collection, addDoc, getDoc, doc, Timestamp, writeBatch} from 'firebase/firestore'
import {db} from '../services/firebase/firebase'
import { Link, NavLink } from 'react-router-dom'
import estilo from'./cart.css';
import { getModularInstance } from '@firebase/util';


function Cart() {
    const [listaProductosInCart, setlistaProductsInCart] = useState ([])
    const [buyFinally, setBuyFinally] = useState(false)
    const [codBuyUser, setCodBuyUser] = useState(undefined)
    const [userBuyer, setuserBuyer] = useState('')
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart, removeItem, totalPriceCart, clear } = useContext(CartContext);
    const [processingOrder, setProcessingOrder] = useState(false)
    const { login, userName } = useContext(UserContext)
    
    useEffect(()=>{
        const list= productsCart
        
            setlistaProductsInCart(list)
            setuserBuyer(userName)
        },[])

    

    if(listaProductosInCart.length === 0 ){
        if(!buyFinally){
        
        return <div className="imgBg ">
            <div className="divCartVoid">
                <h2>Carrito vacío</h2>
                <br></br>
                <Link to={`/productlistdetail`} ><button type="button" className="btnCartBack">Volver a la tienda</button>
                </Link>
            </div>
        </div>
        }else{
        return <div className="imgBg ">
        <div className="divCartVoid">
            <h2>Compra realizada con éxito.</h2>
            <br></br>
            <h3>El código de su compra es: {codBuyUser}</h3>
            <br></br>
            <Link to={`/productlistdetail`} ><button type="button" className="btnCartBack">Volver a la tienda</button>
            </Link>
        </div>
        </div>
        }    
    }

    const OnClearToCart = () => {
        clear();
        setlistaProductsInCart([]);
        
    }
    function setTotalPrice(listProd){
        return totalPriceCart(listProd);
    }

    if(!userName){
        OnClearToCart();
    }
    
    const confirmOrder = () => {

        setProcessingOrder(true)
        
        const phone = document.getElementById("inputPhone").value;
        const email = document.getElementById("inputEmail").value;
        const buyDoc = document.getElementById("inputDocument").value;
        const dateBuy = Date.now();
        

        const objOrder = {
            buyer: userBuyer,
            phone: phone,
            email: email,
            docBuyer: buyDoc,
            codBuy: buyDoc+dateBuy,
            items: listaProductosInCart,
            total: setTotalPrice(listaProductosInCart),
            date : dateBuy,
            status: 'Pedido recibido'
        }
                    
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'listaDeBonsai', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'listaDeBonsai', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    
                })
            }).catch((error) => {
                
                
            }).finally(() => {
                setProcessingOrder(false)
                setBuyFinally(true)
                setCodBuyUser(objOrder.codBuy)               
                
            })
            OnClearToCart();
        }
    }


    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail centrarPocosItems">
            {listaProductosInCart.map(itemBonsai => <a key={itemBonsai.id}><ItemDetailInCart item={itemBonsai}></ItemDetailInCart></a>)}
            </div>
            <div className="divCartActions">
                <h5>Total a pagar: U$S {setTotalPrice(listaProductosInCart)}</h5>
                <button type="button" className="btnCartRemove" onClick={OnClearToCart}>Vaciar carrito</button>
                <button type="button" className="btnCart" data-bs-toggle="modal" data-bs-target="#endBuy">
                    Finalizar compra
                </button>
                <Link to={`/productlistdetail`} ><button type="button" className="btnCart">Volver</button>
            </Link>
            </div>
            
           
            <div className="modal fade" id="endBuy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content modalEndBuy">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Finalizar la compra</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5 >Por favor</h5>
                    <h5>{userName}</h5>
                    <h5 >ingrese sus datos para finalizar la compra</h5>
                    <br></br>
                    <input className="dataInput" type="text" id="inputPhone" placeholder="Teléfono"></input>
                    <br></br>
                    <input className="dataInput" type="text" id="inputEmail" placeholder="e-mail"></input>
                    <br></br>
                    <input className="dataInput" type="text" id="inputDocument" placeholder="Documento"></input>
                    <br></br>
                </div>
                <div className="modal-footer">
                <button type="button" className="btnCartRemove" data-bs-dismiss="modal">Volver</button>
                <button type="button" onClick={() => confirmOrder()} className="btnCart" data-bs-dismiss="modal">Confirmar</button>
            
            </div>
            </div>
        </div>
    </div>

            <br></br>
        </div>
        </>
      )
}

export default Cart;