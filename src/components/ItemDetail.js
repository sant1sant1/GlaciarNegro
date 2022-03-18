import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductosIniciales from "./Items";


const ItemDetail = ({ productos }) => {
    const [productoFiltrado, setProductoFiltrado] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const itemFiltered = () => {
            const data = productos.filter(producto => producto.id == id)
            setProductoFiltrado(data)
        }
        itemFiltered()
    }, [])

    const itemDetail = (
        <ul>
            {productoFiltrado.map((producto, indice) => {
                return (
                    <>
                        <li>{producto.nombre}</li>
                        <img id="Photo" className="shortFluor" src={producto.photo2} />
                        <li>{producto.precio}</li>
                        <li>{producto.colores}</li>
                        <li>{producto.talles}</li>
                    </>)

            })}
        </ul>
    )

    return (
        <>
            {itemDetail}
        </>
    )
}

export default ItemDetail