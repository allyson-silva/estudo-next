export default function lista1(){

    const quantidade = 10;

    return (

        <div>      
      {criaSpans(quantidade)}
        </div>
    )


}
function gerarLista(){
    const lista = [

        <span>1,</span>,
        <span>2,</span>,
        <span>3,</span>,
        <span>4,</span>,
        <span>5,</span>,
        <span>6,</span>,
        <span>7,</span>,
        <span>8,</span>,
        <span>9,</span>,
        <span>10,</span>,

    ]
    return lista

}



function criaSpans(quantidade) {
    const numeros = [];
    for (let i = 1; i <= quantidade; i++) {
      numeros.push(<span key={i}>{i},</span>);
    }
  
    return numeros;
  }


