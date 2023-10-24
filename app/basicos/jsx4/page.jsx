export default function jsx4(){
    //usando chaves consigo acessar uma variável do javascript
    //da pra inclusive acessar funções internas do javascripot
    const subitulo = "Estou em Javascript!";
    return(

        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subitulo}</h2>
            <h3>{3*3}</h3>
            <h4>{Math.max(15,39)}</h4>
            <h5>{entre(9,1,10)}</h5>
        </div>
    )


}

function entre(valor, min, max){

    if(valor >= min && valor <= max){
        return "Sim"
    }
    else{
        return "Não"
    }

}