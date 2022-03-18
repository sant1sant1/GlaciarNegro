import React, { useState } from "react";

const DarkMode = () => {
    
    const [dark,setDark] = useState(false)
    console.log(dark)
    
    const toggleDarkMode = () =>{
        setDark(!dark)
    }

    return (
        <div>
            <button onClick={toggleDarkMode}> toggle Dark Mode</button>
            <p>{dark.toString()}</p>
        </div>
    )

}

export default DarkMode