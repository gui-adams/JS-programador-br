
/*

ação vai ser chamada pela condição
switch é indicado para comparar 
*/
var numero = 6;

for(var i = 0; i < numero; i++ ){
console.log("Executando o for, pela " + i + " vez " )

}
console.log("Acabou")

//somar

var numero = 6;

for(var i = 0; i < numero; i++ ){
console.log("Executando o for, pela " + (i + 10) + " vez " )

}
console.log("Acabou")

//colocar ponto de partida especifico

var numero = 6;

for(var i = 3; i < numero; i++ ){ //aqui o for vai iniciar no 3
console.log("Executando o for, pela " + i + " vez " )

}
console.log("Acabou")

console.log("while")
//while o laço vai se encerrar quando a condição for verdadeira

var numero = 6;

while(numero < 11){ 
    console.log("Número " + numero);
    numero++;

}
console.log("Acabou")

console.log("random")

var numero = Math.random() * 100;

while(numero < 90){ 
    console.log(numero);
    numero = Math.random()* 100;

}
console.log(numero)
console.log("Acabou")