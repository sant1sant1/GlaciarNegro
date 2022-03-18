import { dark } from '@mui/material/styles/createPalette'
import React, { useState, useEffect } from "react";
import DarkMode from './DarkMode'
import Item from './Item'
import ItemDetailContainer from './ItemDetailContainer';
import ProductosIniciales from "./Items";

const ItemListContainer = (greeting) => {
    let productosIniciales = ProductosIniciales
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                setProductos(productosIniciales)
                setLoading(false)
            }, 2000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales)
            })
            .catch((errorDeLaApi) => {
                setError(`El error es: ${errorDeLaApi}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <section className="container">
               
                
                
                <Item productos={productos} loading={loading}/>
            </section>
        </>
    )
}

export default ItemListContainer