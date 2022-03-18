import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const miOnAdd = () => { }

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            {/* <Main className="Main" onAdd={miOnAdd} nombre="Christopher" apellido="Altamirano"/> */}
        </BrowserRouter>
    )
}

export default App