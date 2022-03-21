import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos, loading }) => {

    const onAdd = () =>{
        console.log("ayuda")
    }

    return (
        <>
            <p>{loading ? "Cargando, por favor espere ..." : "carga terminada"}</p>

            <ul>
                {productos.map((producto) => {
                    return (
                        <>
                             <li>{producto.nombre}</li>
                            <img id="Photo" className="shortFluor" src={producto.photo2} />
                            <li>{producto.precio}</li>
                            <li>{producto.colores}</li>
                            <li>{producto.talles}</li>
                           
                            </>
            )

                })}
        </ul>
        </>
    )
}

export default ItemDetail