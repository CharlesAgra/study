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
// function
var myName = '';
var setName = function (params) {
    myName = params;
    return myName;
};
console.log('function -> ', setName('Charles'));
// Tipando funcões
var multiply;
multiply = function (numberOne, numberTwo) {
    return numberOne * numberTwo;
};
console.log('Multiply 9 and 4 => ', multiply(9, 4));
// objeto
var usuario = {
    user: 'CharlesAgra',
    pass: 'dhsjdkhsahdkjasdhjkas'
};
console.log('Usuário -> ', usuario);
// chalenge
var employee = {
    supervisors: ["Little", "Gui", "David"],
    workedHours: function (hour) {
        return hour <= 8 ? 'Ponto Normal' : 'Fora do horário';
    }
};
console.log('Ponto -> ', employee.workedHours(10));
var employeeTwo = {
    supervisors: ["Carlos", "Antonio"],
    workedHours: function (hours) {
        return hours <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log('Type Ponto -> ', employeeTwo.workedHours(8));
// Union Types
// A variável nota pode ter dois tipos que é number e string.
var nota = '10';
console.log('string nota -> ', nota);
nota = 10;
console.log('number nota -> ', nota);
