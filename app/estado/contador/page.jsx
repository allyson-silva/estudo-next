'use client'

import { useState } from "react"

export default function contador(){
    //react hooks
    var [n, setN] = useState(0);
    function incrementa(){
        
        setN(n +1)

    }

  //  const incrementa = () =>       setN(n + 1)
    
    function decrementa(){
        
        setN(n -1)

    }



    return(

        <div>
            <h1>CONTADOR</h1>
           <div> VALOR: {n}</div>
            <button onClick={incrementa}>
            +
            </button>
            <button onClick={decrementa}>
            -
            </button>

          
        </div>
    )
}