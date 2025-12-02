//Variáveis e Operadores
//Atvdd 1
let nome = 'Danilo'

console.log('Olá,' + nome + '!') 

//Atvdd 2
let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

//Atvdd 3
let Celsius = 0

let Fahrenheit = Celsius * 1.8 + 32
 
console.log(Fahrenheit)

//Estruturas Condicionais
//Atvdd 4
let Number = 9
if(Number > 0){
    console.log('positivo')
}else if(Number < 0){
    console.log('negativo')
}if(Number === 0 ) {
    console.log('Zero')
}

let numero = 15

//Atvdd 5
if(numero % 2 === 0 ){
    console.log('par')
}else{
    console.log ('impar')
}

//Atvdd 6
let idade = 17
if(idade >= 16){
    console.log('vc tem idade para votar!')
}else if(idade < 16) {
    console.log('vc não tem idade para votar!')
}

//Laços de repetição
//Atvdd 7
for (let numbers = 0; numbers <= 100; ++numbers) {
    console.log(numbers)
}

//Atvdd 8
for(let contador =1; contador <= 10; contador++){
    console.log(contador * 7)
}

//Atvdd 9
numero = 3
let soma = 0
for (let contador = 1; contador <= numero; contador++){
    soma += contador
}
console.log(soma)

//Arrays e Laços
//Atvdd 10
let frutas = ['melancia', 'pera', 'uva', 'maçã', 'banana']
for(let posicao = 0; posicao < 5; posicao++) {
console.log(frutas[posicao])
}

//Atvdd 11
numbers = [5, 10, 5, 20, 4 ]
soma = 0
for(contador = 0; contador < 5; contador++){
    soma += numbers[contador]
}
console.log(soma)


//Atvdd 12
let numeros = [12, 13, 15, 18, 10, 30]
let maior = 0
for(let contador = 0; contador < numeros.length; contador++){
    if(numeros[contador] > maior){
        maior = numeros[contador]
    }
}

console.log(maior)
 
//Funções
//Atvdd 13
let num1
let num2
function  receba() {
    for(){

    }
    
}

console.log()