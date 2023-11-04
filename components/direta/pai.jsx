import Filho from "./filho"
export default function Pai(props){
    //se o ...props estiver na posterior ao props  o nome padrão definido na chamada será exibido
    //caso contrário será exibido oq foi passado
    return (

        <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Família {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia}/>
            <Filho nome="Allyson" familia={props.familia}/>
            <Filho  {...props} nome="Layanne"/>
        </div>
    )
}