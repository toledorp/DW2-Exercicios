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
