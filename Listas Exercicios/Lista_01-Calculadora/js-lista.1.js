// Pergunta o nome do usuário
let nomeUsuario = prompt("Digite seu nome:");

// Função para exibir mensagem de boas-vindas
function userMessage(nome) {
  document.write(
    `<h2>Olá ${nome}! Bem-vindo(a) à Calculadora Universal!</h2>`
  );
}
userMessage(nomeUsuario);


// Função arrow para cálculo com operador
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

// Função arrow para calcular o dobro
const dobro = num => num * 2;

// Função arrow para calcular a metade
const metade = num => num / 2;

// Lendo valores do usuário
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Lista de operadores
let operadores = ["+", "-", "*", "/"];

// Exibindo as operações matemáticas
document.write(`<h3>Operações Matematicas.</h3>`);
operadores.forEach(op => {
  document.write(
    `<p>O resultado de ${num1} ${op} ${num2} é ${calc(num1, op, num2)}.</p>`
  );
});

// Exibindo o dobro dos números
document.write(`<h3>Cálculo do dobro.</h3>`);
document.write(`<p>O dobro de ${num1} é ${dobro(num1)}.</p>`);
document.write(`<p>O dobro de ${num2} é ${dobro(num2)}.</p>`);

// Exibindo a metade dos números
document.write(`<h3>Cálculo da metade.</h3>`);
document.write(`<p>A metade de ${num1} é ${metade(num1)}.</p>`);
document.write(`<p>A metade de ${num2} é ${metade(num2)}.</p>`);

// Exibindo mensagem com IIFE
const iife = (function(){
    document.write("<h1>Calculadora Universal pronta para uso!</h1>")
})();