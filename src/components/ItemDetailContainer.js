import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ProductosIniciales from "./Items";
import { useParams } from 'react-router-dom';
import ItemCount from "./ItemCount";



const ItemDetailContainer = () => {

    const onAdd = () =>{
        console.log("ayuda")
    }

    const { id } = useParams()
    console.log(id)

    let productosIniciales = ProductosIniciales

    const [productos, setProductos] = useState([])

    const [error, setError] = useState(null)

    let [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const getItems = new Promise((resolve) => {

            setTimeout(() => {
                const myData = ProductosIniciales.find((item) => item.id == id);

                resolve(myData);
            },
             2000);
        });

        getItems

            .then((res) => {
                setProductos([res])
            })

            .catch((errorDeLaApi) => {
                setError(`El error es: ${errorDeLaApi}`)
            })

            .finally(() => {
                setLoading(false)
            })

    }, [id]);



    return ( 
        <>

        {loading ? "cargando" : <ItemDetail productos={productos}/>}

         <ItemCount initial={1} stock={5} onAdd={onAdd}/> 
        </>
    )
    
}

export default ItemDetailContainer