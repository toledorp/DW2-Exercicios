// Manipulação de dados

document.write("<h3>Manipulando datas:</h3>")

//criar uma instancia de classe Date() do Javascrip
const dataAtual = new Date();
document.write(dataAtual)

const dia = dataAtual.getDate()
document.write(`<p>Hoje é dia : ${dia} </p>`)

const mes = dataAtual.getMonth()
document.write(`<p>Estamos no mês : ${mes+1} </p>`)

const ano = dataAtual.getFullYear()
document.write(`<p>Estamos no ano de : ${ano} </p>`)

document.write(`<h2>Hoje é ${dia}/${mes}/${ano}.</h2>`)

// adicionando dias, meses e anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4)
document.write(`<h2>Daqui a 4 anos será : ${dataAtual.getFullYear()}.</h2>`)

// adicionando meses
dataAtual.setMonth(dataAtual.getMonth()+3)
document.write(`<h2>Daqui a 3 meses será : ${dataAtual.getMonth()}.</h2>`)

// adicionando dias
dataAtual.setDate(dataAtual.getDate()+10)
document.write(`<h2>Daqui a 10 dias será : ${dataAtual.getDate()}.</h2>`)


//FORMATACAO DE MOEDAS
//REAL
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style:"currency",
    currency: "BRL",
});
document.write(`<h2>O valor do salario mínimo atual é : ${salarioReal}.</h2>`)

//Dolar
const salarioDolar = salario.toLocaleString("en",{
    style: "currency",
    currency: "USD",
});
const salarioConvertido = salario * 0.176

document.write(`<h2>O valor do salario em Dolar é : ${salarioDolar}.</h2>`)
document.write(`<h2>O valor do salario convertido em Dolar é : ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD"
})}.</h2>`)


// FORMATAÇÃO DE STRING
var nome = window.prompt('Qual o seu nome : ')
document.write(`Ola, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras`)
document.write(`<br> Seu nome em maíusculo é ${nome.toLocaleUpperCase()}.`)
document.write(`<br> Seu nome em minúsculo é ${nome.toLowerCase()}.`)
