import Pessoa from "@/components/Pessoa";

//tsx = type script e react
export default function exemploTS(){
    return(

        <div>
            <Pessoa nome="Allyson" idade={37}></Pessoa>
            <Pessoa nome="Maria" ></Pessoa>
        </div>
    )

}