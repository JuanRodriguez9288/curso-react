import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Button(props) {
	function doClick() {
	console.log('pruebaclick')
	}
	return <button type="button" onClick={doClick}>{props.btntxt}</button>
}


export default Button;
