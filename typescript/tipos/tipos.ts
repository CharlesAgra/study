let n = 'Charles'
let age = 27
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
console.log('Nome -> ', n)
console.log('Idade -> ', age)

/*
 * Atribuindo tipos
*/

const lastName: string = 'Agra'
const isHandsome: boolean = true
const hobbies: string[] = ["Play music", "Read Book", "Play Soccer"]

console.log('lastName -> ', lastName)
console.log('Is Handsome -> ', isHandsome)
console.log('hobbies -> ', hobbies)

// tuplas

const personality: [string, string, string] = ["Handsome", "Funny", "Good"]
console.log('personality -> ', personality)

// enums

enum Cor {
    Cinza = 'cinza',
    Branco = 'branco',
    Preto = 'preto'
}

let minhaCor: Cor = Cor.Cinza
// Assim o valor que ele vai trazer é o Indice da enum
console.log('my favority color -> ', minhaCor)
