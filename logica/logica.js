let nota1 = 10
let nota2 = 5
let nota3 = 9

let media = (nota1 + nota2 + nota3 )/3
console.log (media)
let aprovado = media >= 6;


 if (aprovado) {
    console.log ('vc foi aprovado')
 } else {
    console.log('vc foi reprovado')
 }


let dinheiro =0

let ganha = 100
let perde = 70

for(let mes = 0; mes< 12; mes++){
    dinheiro += ganha;
    dinheiro += perde;
    console.log (dinheiro)
}


while(dinheiro > 0){
    dinheiro -= perde;
    console.log(dinheiro);
}