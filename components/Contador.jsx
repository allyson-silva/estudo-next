import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1,
    }


    inc = () => {
        this.setState((prevState) => ({
            numero: prevState.numero + this.state.passo  
        }))
    }

    alterarPasso = (ev) => {
        this.setState({
          passo: +ev.target.value,
        });
      };

    dec = () => {
        this.setState((prevState) => ({
            numero: prevState.numero - this.state.passo     
        }))
    }
    renderForm() {
        return(
            <>
                {/*    opcao 1 
                <input type="number"  min={1} max={1000} value={this.state.passo} 
                onChange={ev => this.setState({passo: +ev.target.value})}/> */}
              <input type="number"  min={1} max={1000} value={this.state.passo} 
                onChange={this.alterarPasso}/>
                <button onClick={this.inc}>Incrementar +</button>
                <button onClick={this.dec}>Decrementar -</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador usando classe</h1>
                {/* para ler podemos acessar o estado diretamente  */}
                {/* para alterar o estado deve ser feito por set state */}
                <h2>{this.state.numero}</h2> 
                {this.renderForm()}             
            </div>
        );
    }
}

//export default Contador