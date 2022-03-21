import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../media/logo.jpeg';
import CartWidget from './CartWidget';
import DarkMode from './DarkMode';

const NavBar = () => {
    return (
        <>
            <div className="header">
                <Link to={"/"}>
                    <img className="logo" src={logo}></img>
                </Link>
                <Link to={"/"}>
                <h1>Glaciar negro</h1>
                </Link>
                <DarkMode />

            </div>
            <ul className='Botones'>
                <Link to={"/categoria/cat1"}>
                    <li><a href="#">Ropa de Hombre</a></li>
                </Link>
                <Link to={"/categoria/cat2"}>
                    <li><a href="#">Ropa de Mujer</a></li>
                </Link>
                <Link to={"/categoria/cat3"}>
                    <li><a href="#">Contacto</a></li>
                </Link>
                <NavLink to="/Carrito">{CartWidget}</NavLink>
            </ul>
        </>
    )
}

export default NavBar