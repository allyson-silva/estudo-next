'use client'
import React, { useState } from "react";
import Bola from "./bola";

export default function MegaSena() {
  const [numerosAleatorios, setNumerosAleatorios] = useState([]);
  const [quantidadeBolas, setQuantidadeBolas] = useState(6); // Valor padrão inicial

  const geraArrayAleatorio = (quantidade) => {
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
      const numero = Math.floor(Math.random() * 59) + 1;
      numeros.push(numero);
    }
    setNumerosAleatorios(numeros);
  };

  const handleQuantidadeBolasChange = (event) => {
    let quantidade = parseInt(event.target.value);
    if (quantidade >= 1 && quantidade <= 20) {
      setQuantidadeBolas(quantidade);
    }
  };

  return (

    <div>
        <h1>MEGA SENA</h1>
        <div style={{  display: "flex" }} id="containerBolas">

            {numerosAleatorios.map((numero, index) => (
                <Bola numero={numero} key={index} />
            ))}  
        </div>
        <label>
        Quantidade de Bolas (1-20):
        <input
          type="number"
          min="1"
          max="20"
          value={quantidadeBolas}
          onChange={handleQuantidadeBolasChange}
        />
        </label>
        <button onClick={() => geraArrayAleatorio(quantidadeBolas)}>Gerar números aleatórios</button>
   

     


    </div>
)
}