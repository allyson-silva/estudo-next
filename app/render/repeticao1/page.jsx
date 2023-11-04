export default function repeticao1(){
    const ListaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function renderizarLista(){
        //map transforma um array em outro
        //aqui transforma um array de string em JSX.
        return ListaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
    }


    return(

        <ul>
          {renderizarLista()}
        </ul>
    )

        /*
    function renderizarLista(){
        const itens = []
        for(let i = 0; i < ListaAprovados.length; i++)
        {
            itens.push(<li key={i}>{ListaAprovados[i]}</li>)

        }

        return itens

          

    }
    */



}