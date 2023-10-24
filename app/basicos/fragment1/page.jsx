import React from 'react'
export default function fragment(){
//não se pode retornar elementos adjacentes 
//solução colocar dentro da div   
// outra solucao é usar o fragment coloca direto do html final sem envolver em div'
    return (
       <React.Fragment>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
        </React.Fragment>
    )

}