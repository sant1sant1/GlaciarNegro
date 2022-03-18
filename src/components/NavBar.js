import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.jpeg';
import Cart from './CartWidget';
import DarkMode from './DarkMode';

const NavBar = () => {
    return (
        <>
            <div className="header">
                <Link to={"/"}>
                    <img className="logo" src={logo}></img>
                </Link>
                <h1>Glaciar negro</h1>
                <DarkMode />

            </div>
            <ul className='Botones'>
                <Link to={"cat1"}>
                    <li><a href="#">Ropa de Hombre</a></li>
                </Link>
                <Link to={"cat2"}>
                    <li><a href="#">Ropa de Mujer</a></li>
                </Link>
                <Link to={"cat3"}>
                    <li><a href="#">Contacto</a></li>
                </Link>
                <Cart />
            </ul>
        </>
    )
}

export default NavBar