import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../media/cart.svg'


const CartWidget = () => {
    return (
        <>   
        <Link to="/Carrito">
        <img className="Carrito" src={Cart}></img>  
        </Link>
                 
        </>
    )
}

export default CartWidget