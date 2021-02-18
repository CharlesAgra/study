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

// function
let myName = ''
const setName = (params: string): string => {
    myName = params
    return myName
}

console.log('function -> ', setName('Charles'))

// Tipando funcões

let multiply: (numberOne: number, numberTwo: number) => number
multiply = (numberOne: number, numberTwo: number): number => {
    return numberOne * numberTwo
}

console.log('Multiply 9 and 4 => ', multiply(9, 4))

// objeto

let usuario: { user: string, pass: string } = {
    user: 'CharlesAgra',
    pass: 'dhsjdkhsahdkjasdhjkas'
}

console.log('Usuário -> ', usuario)

// chalenge

const employee: { supervisors: string[], workedHours: (hour: number) => string } = {
    supervisors: ["Little", "Gui", "David"],
    workedHours: (hour: number): string => {
        return hour <= 8 ? 'Ponto Normal' : 'Fora do horário'
    }
}

console.log('Ponto -> ', employee.workedHours(10))

// Types

type Employee = {
    supervisors: string[],
    workedHours: (hour: number) => string
}

const employeeTwo: Employee = {
    supervisors: ["Carlos", "Antonio"],
    workedHours: (hours: number) => {
        return hours <= 8 ? 'Ponto normal' : 'Fora do horário'
    }
}

console.log('Type Ponto -> ', employeeTwo.workedHours(8))

// Union Types
// A variável nota pode ter dois tipos que é number e string.

let nota: number | string = '10'
console.log('string nota -> ', nota)

nota = 10
console.log('number nota -> ', nota)
