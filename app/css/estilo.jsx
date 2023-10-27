export default function Estilo(props){
    //const background-collor
    //identificador inválido
    //trocar hifen por camel case
    //duas chaves {} = javascript
    //4 chaves {{  }} =  passar objedo != double muustache
    //IF INLINE pra mudar a cor do background de acordo com o valor recebido
    const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"
    return (
        <div>
       
            <h1 style={{backgroundColor: props.numero >= 0 ? "#2f2" : "#D22",
                        color: props.color, }}>{props.texto ?? "Texto padrão"}</h1>
            <h2 className={classeAplicada}></h2>
        </div>
       
    )

}