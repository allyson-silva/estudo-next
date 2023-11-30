'use client'
import { useState } from "react"

export default function formulario(){
    var [valor, setValor] = useState('inicial')
    //o estado tem a verdade absoluta sobre os dados
    //primeiro tem que alterar o estado para depois o componente mostrar essa alteração
    //esse é um exemplo de componente controlado

    //se passar um valor inicial undifened ou uma string vazia o componente será uncontrolled

    function alterarInput(){
        setValor(valor + "!")

    }
    return (

        <div style={{ 
            display: "flex",
            flexDirection: "column"
         }}>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}