import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';

const miOnAdd = () => { }

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:catId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/Carrito" element={<Carrito/>}/>
                
                
            </Routes>
            {/* <Main className="Main" onAdd={miOnAdd} nombre="Christopher" apellido="Altamirano"/> */}
        </BrowserRouter>
    )
}

export default App