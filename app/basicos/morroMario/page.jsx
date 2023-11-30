'use client'
import Bloco from "./bloco"
import { useState } from "react";
export default function morroMario(){

    const [qtdBlocos, setQtdBlocos] = useState(6) // Valor padrão inicial

    const estiloArea = {
        display: 'flex',
        flexDirection: 'column', // Direção vertical
        justifyContent: 'flex-end', // Alinhar conteúdo na parte inferior
       alignItems: 'flex-end', // Alinhar conteúdo à esquerda
        width: '1400px', // Defina a largura desejada
        height: '850px', // Defina a altura desejada
        backgroundColor: '#fff', // Adicione estilos conforme necessário
        padding: '10px' // Adicione espaço interno conforme necessário
        
    }

    
    const renderizarBlocos = () => {
        const blocosPorLinha = []; // Array que armazenará as linhas de blocos
      
        // Loop para criar as linhas com diferentes quantidades de blocos
        for (let numeroBlocos = 1; numeroBlocos <= qtdBlocos; numeroBlocos++) {
          const linhaDeBlocos = [];
      
          // Loop para adicionar os blocos à linha
          for (let blocoIndex = 0; blocoIndex < numeroBlocos; blocoIndex++) {
            linhaDeBlocos.push(<Bloco key={blocoIndex} />);
          }
      
          // Adiciona a linha ao array principal
          blocosPorLinha.push(
            <div key={numeroBlocos} style={{ display: 'flex' }}>
              {linhaDeBlocos}
            </div>
          );
        }
      
        return blocosPorLinha;
      };

    const handleQtdBlocosChange = (event) => {
        let quantidade = parseInt(event.target.value);
        if (quantidade >= 1 && quantidade <= 40) {
          setQtdBlocos(quantidade);
        }
      };

    return (
       
        <div >
           
            <div style={estiloArea}>
            {renderizarBlocos()}
            </div>
            <h1>GERADOR DE BLOCOS DO MÁRIO</h1>
            <label>
            Quantidade de BLOCOS (1-40):
            <input
            type="number"
            min="1"
            max="40"
            value={qtdBlocos}
            onChange={handleQtdBlocosChange}
            />
            </label>
        </div>
    )

}