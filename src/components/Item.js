import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({ productos, loading }) => {

    return (
        <>
            <p>{loading ? "Cargando, por favor espere ..." : "carga terminada"}</p>

            <ul>
                {productos.map((producto) => {
                    return (
                        <>
                            <Link to={`/item/${producto.id}`} key={producto.id}>
                            <li>{producto.nombre}</li>
                            <img id="Photo" className="shortFluor" src={producto.photo} />
                            <li>{producto.precio}</li>
                            <li>{producto.colores}</li>
                            <li>{producto.categoria}</li>
                            </Link >    
                        </>
            )

                })}
        </ul>
        </>
    )
}

export default Item