import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import ProductosIniciales from "./Items";

const ItemDetailContainer = (greeting) => {
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
                {loading ? "cargando" : <ItemDetail productos={productos} />}
            </section>
        </>
    )
}

export default ItemDetailContainer