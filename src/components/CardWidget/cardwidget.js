import logoCart from '../images/cart3.png';
import estilo from'./cardwidget.css';


const CardWidget = ({cantidad}) => {
  

 // const miFuncion = () => {
 //     console.log('click en NavBar')
 //   }
 // function otraFuncion() {
 //     console.log('click en NavBar funcion común')
 //   }
  return (
  	
    <div className = 'divCart'>
      <img src={logoCart} alt="logo" />
      <p className="navbar-brand" href="#" >{cantidad}</p>
    </div>
  )
}



export default CardWidget