import React from "react";
import Item from "./Item";

const ItemList = (productos, loading) => {
    return(
        <>
            {productos.map(producto => {
                <Item productos={producto} loading={loading} />
            })}
        </>
    )
}

export default ItemList