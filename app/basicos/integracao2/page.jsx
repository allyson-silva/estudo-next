import styles from "../../css/integracao2.module.css"
//dessa maneira esse import não causa nenhum efeito indesejado no resto do app
//tem que estar como module, senão não consigo importar
export default function integracao2(){

    return (

        <div id={styles.integracao2}>
            <div className={styles.vermelha}>Texto #01</div>
            <div className={styles.azul}>Texto #02</div>
            <div className={styles.branca}>Texto #03</div>
            

        </div>
    )


}