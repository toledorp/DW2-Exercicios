//Tipos de funções

// Função Simples
function showMessage(){
    document.write("<h2>Olá! Bem-vindo! Essa é sua primeira função!</h2>")
}
//Invocando a função
showMessage();

//Função com Parametros
const user = "Rogerio Pupo"


//função com mais de um parametro
const n1 = 10;
const n2 = 12;

function mult(n1, n2) {
    //essa função recebe dosi parametros
    let result = n1 * n2
    document.write(`A multiplicação de ${n1} e ${n2} é iguaç a ${result}`)
}
mult(n1, n2)

//função com retorno
const num1 = 1000;
const num2 = 5;

function div(num1, num2){
    return num1 / num2
}
document.write(`<p>A divisão de ${num1} por ${num2 é igual a ${div(num1, num2)}.</p>}`);

//funçao com diferentes retornos
const number = 7;

function parImpar(number){
    if (number % 2 == 0){
        retur "par"
    }else {
        return "impar"
    }
}
document.write(`<p>`O numero ${number} é <strong>${parImpar(number)}</strong>);
