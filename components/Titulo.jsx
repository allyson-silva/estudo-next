export default function Titulo(props){
    //por padrão se usa props, mas pode se dar o nome que quiser
    //lá vai estar todas as propriedads que vc vai passar.
    //se props.pequeno for true
    /*
    if(props.pequeno){

        return(
            <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
            </>         

        )
    }
    else{
        return(

            <>
                        <h1>{props.principal}</h1>
                        <h1>{props.secundario}</h1>
            </>
        )
    }
    */
   //usando operador ternário
   return props.pequeno ? (

        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
   )
   : (
        <>
            <h1 style={{ fontSize: "40px" }}>{props.principal}</h1>
            <h1>{props.secundario}</h1>
         </>
   )



}
