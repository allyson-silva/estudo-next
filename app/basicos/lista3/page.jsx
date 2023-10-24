
//se chamar em branco considera default 10
function gerarLista(final = 5){
    const lista = []
    for(let i = 1; i <= final; i++){
        lista.push(<span>{i},</span>)


    }
    return lista


}

export default function lista(){

    return (

        <div>
            {gerarLista()}
        </div>
    )

}