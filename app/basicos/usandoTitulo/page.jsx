import Titulo from '../../../components/titulo'
//para fazer um import por padrão começa do diretório que vc está, caso esteja 
// num diretório acima ou raiz tem que ir voltando com ..


export default function usandoTitulo(){


    return(

        <div>
            <Titulo
          principal="Página de cadastro"
           secundario="Incluir, alterar e excluir coisas!"
          />
            <Titulo
          principal="Página de login"
           secundario="Informe seu email e senha"
           pequeno={true}
          />

         
        </div>
    )
}