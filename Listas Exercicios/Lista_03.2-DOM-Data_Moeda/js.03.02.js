// 1. Exibe a data e hora atuais no formato completo
document.write(new Date().toString() + "<br>");

// 2. Cria variável compraInternacional e exibe formatada em USD
let compraInternacional = 500.75;
let formatoUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
document.write("Valor em dólar: " + formatoUSD.format(compraInternacional) + "<br>");

// 3. Converte e exibe o valor em BRL (usando taxa simulada de 5.25 BRL por USD)
let taxaCambio = 5.25;
let valorBRL = compraInternacional * taxaCambio;
let formatoBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
document.write("Valor em real: " + formatoBRL.format(valorBRL) + "<br>");

// 4. Calcula e exibe a data de entrega (daqui a 12 dias) no formato DD/MM/AAAA
let dataAtual = new Date();
let dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataAtual.getDate() + 12);

let dia = String(dataEntrega.getDate()).padStart(2, '0');
let mes = String(dataEntrega.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
let ano = dataEntrega.getFullYear();

document.write("Data de entrega estimada: " + dia + "/" + mes + "/" + ano + "<br>");