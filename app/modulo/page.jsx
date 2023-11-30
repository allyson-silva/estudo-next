import Padrao, { Comp1, Comp2, Comp4, Comp5, Comp6} from '../../components/modulo/funcionais'
//no export sem default pode também ser "renomeado", mas nesse caso tem q usar o as fora as chaves ex
//import { Comp1 as Blabla } from '../../../components/modulo/funcionais'

//no export default vc pode dar o nome que quiser no componente q vc importa
// não importa o nome da função noa rquivo de origem
// pode ser inclusive uma função anonima
export default function teste(){

    return(
        <div>
            <Comp1 />
            <Comp2></Comp2>
            <Padrao></Padrao>
            <Comp4></Comp4>
            <Comp5/>
            <Comp6 msg="QUe legal"/>
        </div>
    )
}