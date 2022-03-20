import { dark } from '@mui/material/styles/createPalette'
import React, { useState, useEffect } from "react";
import DarkMode from './DarkMode';
import Item from './Item';
import ProductosIniciales from "./Items";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    let productosIniciales = ProductosIniciales;
    const [productos, setItems] = useState([]);
    const [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);
    const {catId} = useParams();
    
    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() =>{
                const myData = catId?
                    ProductosIniciales.filter((item) => item.categoria === catId)
                    :ProductosIniciales;
                resolve(myData)
            },2000)
            
        })

        getItems
            .then((res) => {
                setItems(res)
            })
            .catch((errorDeLaApi) => {
                setError(`El error es: ${errorDeLaApi}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    return (
        <>
            <section className="container">             
                <Item productos={productos} loading={loading}/>
            </section>
        </>
    )
}

export default ItemListContainer