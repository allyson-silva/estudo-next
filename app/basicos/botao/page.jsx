'use client';
//precisa doo use client, por padrão todos os componentes do next são server side.

function acao1(){

    console.log("acao1")
}

export default function Botao(){

    function acao2(){

        console.log("ação2")
    }
    function acao5(e){
        console.log(e)

    }

    //acao3 é uma função normal JS
    //acao 4 é uma função arrow
    //acao 5 pego todos os dados do evento
    //acao 5 v2 na chamada pego um valor especifico do evento
    return(
        <div>
            <input type="text" onChange={ () => console.log("mudou")} />
            <button onClick={acao1}>Click 001</button>
            <button onClick={acao2}>Click 002</button>
            <button onClick={function(){

                console.log("Acao3")
            }}>Click 003</button>

            <button onClick={() => console.log("acao4")}>Click 004</button>
            <button onClick={acao5}>Click 005</button>
            <button onClick={e => acao5(e.altKey)}>Click 005 v2</button>
        </div>

    )
}