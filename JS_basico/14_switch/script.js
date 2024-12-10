
/*

ação vai ser chamada pela condição
switch é indicado para comparar 
*/

var nota1 = 2.0;
var nota2 = 1.8;

var media = nota1 + nota2 / 2;

var conceito = ""

if(media >=8){
    conceito = "Ótimo";

}
else if (media > 6.5){

    conteito = "Bom";

}else{

    conceito = "Regular";

}


console.log(media);
console.log(conceito);

switch(conceito){

    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno")
        break; //quebra o switch
    case "Bom":
        console.log("Você está quase perfeito")
        break; //quebra o switch
    case "Regular":
        console.log("Estudo mais um pouco")
        break; //quebra o switch
    default: // caso tenha alguma falha na lógica ele vai ser chamado
        console.log("Error")
        break; //quebra o switch
}