export default function Filho(props){
    //não existe relação direta entre filho e pai
    //pra ter comunicação indireta, tem q ter direta
    // da pra passar pela função a mensagem do filho pro pai.
    console.log(props)
    //primeira opção PASSA O EVENTO
    //A SEGUNDA opção passa 
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={() => props.funcao("Passei no ENEM!")}>Falar com o Pai #02</button>
        </div>
    )
}