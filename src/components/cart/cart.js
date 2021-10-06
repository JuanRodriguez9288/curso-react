import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailInCart from '../ItemDetail/ItemDetailInCart';
import {CartContext} from '../context/CartContext'
import {collection, addDoc, getDoc, doc, Timestamp, writeBatch} from 'firebase/firestore'
import {db} from '../services/firebase/firebase'
import { Link, NavLink } from 'react-router-dom'
//import loadingif from '../images/loading2.gif';
// const orden = [
//     {buyer:{name:'juan', phone:'12345', email:'aaa@gmail.com'}},
//     {items:[{id:'qqwqqe', title:'item1', price:585}], total:1000}
//     ]

function Cart() {
    const [listaProductosInCart, setlistaProductsInCart] = useState ([])
    
    const { quantity, changeQuantity, addItem, productsCart, setProductsCart, removeItem, totalPriceCart, clear } = useContext(CartContext);
    const [processingOrder, setProcessingOrder] = useState(false)
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
    function setTotalPrice(listProd){
        return totalPriceCart(listProd);
    }

    const confirmOrder = () => {

        setProcessingOrder(true)
        const name = document.getElementById("inputName").value;
        const phone = document.getElementById("inputPhone").value;
        const email = document.getElementById("inputEmail").value;
        
        const objOrder = {
            buyer: name,
            phone: phone,
            email: email,
            items: listaProductosInCart,
            total: setTotalPrice(listaProductosInCart),
            date: Timestamp.fromDate(new Date())
        }
                    
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'listaDeBonsai', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'items', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            alert('Compra realizada con éxito')
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    //setNotification('success', 'La orden se ejecuto con exito')
                    //alert('La orden se ejecuto con exito')
                })
            }).catch((error) => {
                //setNotification('error','Error al ejecutar la orden')
                alert('Error al ejecutar la compra')
            }).finally(() => {
                setProcessingOrder(false)

                //clearCart()
                //setTotal(0)
            })
            OnClearToCart();
        }
    }

    // function finalizarCompra(){
    //     modalCompra.modal();
    // }
    




    return (
        <>
        <div className="imgBg">
            <div className="groupCardDetail centrarPocosItems">
            {listaProductosInCart.map(itemBonsai => <a key={itemBonsai.id}><ItemDetailInCart item={itemBonsai}></ItemDetailInCart></a>)}
            </div>
            <h5>Total a pagar: U$S {setTotalPrice(listaProductosInCart)}</h5>
            <button type="button" className="btnCartRemove" onClick={OnClearToCart}>Vaciar carrito</button>
            <br></br>
            {/* <button type="button" className="btnCartRemove" onClick={finalizarCompra}>Vaciar carrito</button>
            <br></br> */}
            
            <Link to={`/productlistdetail`} ><button type="button" className="btnCart">Volver</button>
            </Link>
            <h5>Para finalizar la compra ingrese sus datos</h5>
            <input type="text" id="inputName" placeholder="Nombre"></input>
            <br></br>
            <input type="text" id="inputPhone" placeholder="Teléfono"></input>
            <br></br>
            <input type="text" id="inputEmail" placeholder="e-mail"></input>
            <br></br>
            <button onClick={() => confirmOrder()} className="Button" className="btnCart">Confirmar</button>
            <br></br>
        </div>
        </>
      )
}

export default Cart;