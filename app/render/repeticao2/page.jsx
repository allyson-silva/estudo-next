import listaProdutos from "../../../data/listaProdutos"
export default function repeticao2(){

    const comBorda = {

        border: "1px solid black",
    }

    function renderizarLinhas(){
   
      
        return listaProdutos.map(produto => {
            return (

                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>     
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
            })
          

    }
    return (
        <div>
            <table style={{ border: "1px solid black" }}>

                <thead>
                    <th>Còdigo</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}