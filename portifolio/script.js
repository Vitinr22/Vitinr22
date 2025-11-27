console.log('Testando conexão')

let nome = document.getElementById('nome')
let assunto = document.getElementById('assunto')
let descricao = document.getElementById('descricao')
let botao = document.getElementById('botao')

console.log(nome, assunto, descricao, botao)

botao.addEventListener('click', (e) => {
    e.preventDefault()

let mensagem = 'Olá, meu nome é' + nome.value + ', gostaria de falar sobre ' + assunto.value + './n' + descricao.value

 let telefone = '5533984248399'
 mensagem = encodeURIComponent(mensagem)
let whatsapp = 'https://api.whatsapp.com/send?phone=' + telefone + '&text' + mensagem 
console.log(whatsapp)
})
