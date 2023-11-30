'use client'
import { useState } from "react";
import Bola from "./bola"

export default function megasena(){

    

    let [numerosAleatorios, setNumeroAleatorios] = useState([]);
    let geraArrayAleatorio = () => {
        const numeros = [];
        for (let i = 0; i < 6; i++) {
          const numero = Math.floor(Math.random() * 59) + 1;
          numeros.push(numero);
        }
        setNumeroAleatorios(numeros);
      };
  //  const estilo = {}

    return (

        <div>
            <h1>MEGA SENA</h1>
            <div style={{  display: "flex" }} id="containerBolas">

                {numerosAleatorios.map((numero, index) => (
                    <Bola numero={numero} key={index} />
                ))}  
            </div>
            <button onClick={geraArrayAleatorio}>Gerar números aleatórios</button>
       

         


        </div>
    )
}