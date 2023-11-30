'use client'

import { useState, useEffect } from "react"
import {mega} from "../../../functions/mega"
import NumeroDisplay from "../../../components/numeroDisplay"
export default function megasena(){
    let [qtd, setQtd] = useState(6)
    //está gerando erro pois o valor inicial já é setado na função
   // let [numeros, setNumeros] = useState(mega(qtd))
   let [numeros, setNumeros] = useState([])

 //useEffect ajuda a não entrar em loop infinito na hora de renderizar
   useEffect( () => {
        setNumeros(mega())

   }, [])
 

    //transforma um array numerico em um array jsx
    function renderNumeros(){

        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return(

        <div style={{ 
            display: "flex",
      
            flexDirection: "column",
            alignItems: "center"

         }}>
            <h1>
                Mega sena
            </h1>
            <div style={{ 
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"}}>
                {renderNumeros()}
            </div>
            <div>
                 {/*
                ao usar o simbolo + eu garanto que será utilizado número
                */}
                <input type="number" onChange={e => setQtd(+e.target.value)} min={6} max={60}/>
                <button onClick={() => setNumeros(mega(qtd)) }>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}