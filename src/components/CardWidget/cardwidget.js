import logoCart from './cart.png';
import estilo from'./cardwidget.css';


const CardWidget = ({cant}) => {
  

 // const miFuncion = () => {
 //     console.log('click en NavBar')
 //   }
 // function otraFuncion() {
 //     console.log('click en NavBar funcion común')
 //   }
  return (
  	
    <div className = 'divCart'>
      <img src={logoCart} alt="logo" />
      <p class="navbar-brand" href="#" >{cant}</p>
    </div>
  )
}



export default CardWidget