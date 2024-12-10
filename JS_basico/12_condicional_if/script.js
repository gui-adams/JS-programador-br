
/*
Somar string trasformando em numero

caso uma item não seja verdade ele realiza outra processo

IF = se
ELSE = se não

&& = e

"se" o usuário for maior que 18 anos o software precisa exibiir que pode comprar cerveja "se não" ou seja não é maior
nao pode comprar.

precisa está entre parentes
*/

// Comando simples
var idade = 16  ;

if (idade >= 18)
    console.log("pode")
    
else
    console.log("Não pode")

// Bloco de comando


if (idade >= 18){ //chave
    console.log("pode")
    console.log("Qual o seu pedido?")
} //chave
else{ //chave
    console.log("Não pode")
    console.log("Volte Futuramente")
}

//else if

if (idade >= 35){ 
    console.log("pode")
    console.log("Qual o seu pedido?")
} 
else if  (idade >=18) {
    console.log("Não pode")
    console.log("Mostre a identidade")
}
else {
    console.log("Não pode")
    console.log("Volte Futuramente")    
}

// uso do && = E

// a idade é igual ou maior que 18 = VERDADE
// a idade é igual o menor que 70 = Falso
// para && fosse verdade eu precisava que ambos fossem verdade 
// caso algum seja FALSO não segue a lógica.

if (idade >= 18 && idade <= 70){ //a idade é maior que 18 mas como é menor que 70 (80 anos no var) não vai poder
    console.log("pode")
    console.log("Qual o seu pedido??")
} 
else {
    console.log("Não pode")
    console.log("Volte Futuramente!!")    
}


// uso do || = OU
// se a idade for menor que 18 ou maior que 70 = VERDADEIRO

if (idade >= 18 || idade <= 70){ //preciso que idade seja menor que 18 e também maior que 70 caso não seja um o outro é Falso
    console.log("pode ##")
    console.log("Qual o seu pedido? ##")
} 
else {
    console.log("Não pode ##")
    console.log("Volte Futuramente ##")    
}