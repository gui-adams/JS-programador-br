
/*

&& = "E" (AND)
|| = "ou" (OR)

Negativo =  !

*/


var a = true;
var b = false;


var c = a && b; // se ambos forem verdadeiros ele retorna verdadeiro
                // se ambas forem falsas ele retorna falso

console.log (c); //Agora se uma delas for falso ele retorna falso

// &&

var idade = 20;
var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;

console.log("Idade ", idade);
console.log("Maior que vinte ", maior20)
console.log("Menor que vinte ", menor30)
console.log("Entre 20 e 30 ", entre)

// \\ 

var idade = 20;
var menor10 = idade <= 10;
var maior65 = idade >= 65;


var gratuitdade = menor10 || maior65;

console.log("Idade ", idade);
console.log("Maior que 65 ", maior65)
console.log("Menor que 10 ", menor10)
console.log("Tem direito a gratuidade?", gratuitdade) 

// a lógica a acima ou ou referese a o cliente não tem idade maior 65 (false)
// o mesmo cliente também não tem idade menor que 10(false)
// é falso pois não atende o requisito sendo que ele não tem dirito a gratuitidade
// é retornado false ou no portunhol é não false nesse caso é = stop

// Ou || se um dos dois forem verdadeiro o ou || vai ser verdadeiro
// só é falso se ambos forem falso.
// se ambos forem verdadeiro vai retornar verdadeiro|true


// Negativo !

var idade = 35;

var maior20 = idade >=20;
var menor20 = !maior20;

console.log("Maior que vinte", maior20)
console.log("Menor que vinte", menor20)

console.log(!true) // serve para (!) para negar uma varor seja falso ou true revertendo ele
//para o seu oposto