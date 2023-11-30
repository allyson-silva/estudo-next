'use client'
import { Component } from "react";
import  Contador  from '../../../components/Contador'
//criando componente baseado em classe
export default class ContadorPage extends Component{

    render(){
        return(
            <div>
              
                <Contador />
                <Contador valorInicial={100} passo={10}/>
            
            </div>
        )
    }
}