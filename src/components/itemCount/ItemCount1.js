import React, { useState, useEffect, createContext, useContext } from 'react'

import 'bootstrap/dist/js/bootstrap.bundle.min';

const ItemCount = ({product, productsAdded, addProdFunction}) =>{
    const [quantity, setQuantity] = useState(0)

    const onAdd = () =>{
        if(quantity < product.stock){
            setQuantity(quantity+1)
        }
    }
    const onRemove = () =>{
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    const onAddtoCart = () =>{
        const newProduct = {
            ...product,
            quantity: quantity
        }
        setNotification(`ok`,`producto agregado`)
    }


}