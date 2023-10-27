import SomaUm from "../../../components/somaUm";
//convencao do react tem que ser maiusculo o nome dado ao js ou tsx importado
export default function propsSomenteLeitura(props) {
    //props é somente leitura
  return (
    <div>
        <h1>{props.numero +1}</h1>
    </div>

  )

}