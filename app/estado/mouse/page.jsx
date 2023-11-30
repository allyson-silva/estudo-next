'use client'

import { useState } from "react"

export default function Mouse(){

    var [x, setX] = useState(0);
    var [y, setY] = useState(0);

 
  
    const estilo = {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",   
        justifyContent: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev){
       setX(ev.clientX)
       setY(ev.clientY)
   
    }

    return (

        <div style={estilo} onMouseMove={quandoMover}>

                 <span> Eixo X: {x}</span>
                 <span> Eixo Y: {y}</span>
        </div>  

       
            
    )
}