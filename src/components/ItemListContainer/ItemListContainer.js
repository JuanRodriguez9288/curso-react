import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ItemListContainer(props) {
    console.log(props);
	return (
    <>
    <a className="item" href="#">Listado de productos</a>
    <ul class="menu">
        <li><a class="item" href="#">Producto 1</a></li>
        <li><a class="item" href="#">Producto 2</a></li>
        <li><a class="item" href="#">Producto 3</a></li>
    </ul>
    {props.children}
  </>
  )
}

export default ItemListContainer;