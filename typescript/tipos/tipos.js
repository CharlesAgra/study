"use strict";
var n = 'Charles';
var age = 27;
/*
 * Tipos
 * No typescript os tipos são inferidos
 * Como você adicionou uma string na variável n
 * Se vc mais pra frente quiser adicionar um número vai dar erro
 * O Typescript quando você não coloca a tipagem ele faz isso por você
*/
/*
 * Tipos
 * string, number, boolean e etc...
 *
*/
console.log('Nome -> ', n);
console.log('Idade -> ', age);
/*
 * Atribuindo tipos
*/
var lastName = 'Agra';
var isHandsome = true;
var hobbies = ["Play music", "Read Book", "Play Soccer"];
console.log('lastName -> ', lastName);
console.log('Is Handsome -> ', isHandsome);
console.log('hobbies -> ', hobbies);
// tuplas
var personality = ["Handsome", "Funny", "Good"];
console.log('personality -> ', personality);
// enums
var Cor;
(function (Cor) {
    Cor["Cinza"] = "cinza";
    Cor["Branco"] = "branco";
    Cor["Preto"] = "preto";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
// Assim o valor que ele vai trazer é o Indice da enum
console.log('my favority color -> ', minhaCor);
