export default function Lista(props){

    //a propriedade children pego a herança
    return(
        <div>
            <h1>Lista de algo</h1>
            <ul>
                
                {props.children}
                
            </ul>
        </div>
    )
}