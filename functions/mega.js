 export function mega(qtd = 6, numeros = []){
    //se tirar o export da pra testar no próprio vscode o código usando atalho Ctrl + Alt + N
    //não executar se número de bolas for menor que 1 ou maior q 20
    //converte para valor numerico
    qtd = +qtd
    console.log(numeros)
    if(qtd <1 || qtd >60){
        throw "Quantidade inválida"

    }


    //parar de executar quando numeros gerados for igual a quantidade
    if(numeros.length === qtd){
        //e ordena do menor para o maior
        return numeros.sort((n1, n2) => n1 - n2)
    }

    let numeroAleatorio = parseInt(Math.random() * 60) +1
    //verificar se esse número já não foi adicionado anteriormente
    //verificar se o array numeros NÃO possui o numeroAleatorio recem gerado
    if (!numeros.includes(numeroAleatorio)){
        //chama a propria função passando como parametro a quantidade passada inicialmente
        //o array anterior de numeros com a adição do númeroAleatório atual
        return mega(qtd, [...numeros, numeroAleatorio])

    } else{

        return mega(qtd, numeros)
    }

}
