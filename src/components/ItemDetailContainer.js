import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ProductosIniciales from "./Items";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (greeting) => {

    const { itemId } = useParams()

    console.log(itemId)

    let productosIniciales = ProductosIniciales

    const [productos, setProductos] = useState({})

    const [error, setError] = useState(null)

    let [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const getItems = new Promise((resolve) => {

            setTimeout(() => {
                const myData = ProductosIniciales.find((item) => item.id === itemId);

                resolve(myData);
            },
             2000);
        });

        getItems

            .then((res) => {
                setProductos(res)
            })

            .catch((errorDeLaApi) => {
                setError(`El error es: ${errorDeLaApi}`)
            })

            .finally(() => {
                setLoading(false)
            })

    }, [itemId]);



    return (
        <>
            <section className="container">
                {loading ? "cargando" : <ItemDetail productos={productos} />}
            </section>
        </>
    )
}

export default ItemDetailContainer