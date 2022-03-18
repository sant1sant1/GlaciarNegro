import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount"

const Main = (productos, loading) => {

    return (
        <>
        <ItemCount className="contador"/>
        <div className="productos">
        <ItemListContainer/>
        <ItemDetailContainer/>
        </div>
        </>
    )
}

export default Main