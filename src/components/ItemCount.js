import React from 'react';
import {useState} from "react"

const ItemCount = () => {
    
   

    const [contador, setContador] = useState(0)

    const HandleClick = () => {
        if (contador < 10){
            setContador(contador + 1)
        } else {
            setContador(10)
        }
    }

    const restar = () => {
        if (contador > 1){
            setContador(contador - 1)
        } else {
            setContador(0)
        }
    }

    const reset = () => {
        setContador(0)
    }

    return (
        <div className='contador'>
            
            <p>mi contador actual : {contador}</p>
            <button onClick={restar}>restar</button>
            <button onClick={reset}>reset</button>
            <button onClick={HandleClick}>aumentar</button>
        </div>
    )
}



export default ItemCount;