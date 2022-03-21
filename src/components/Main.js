import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount"

const Main = () => {

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