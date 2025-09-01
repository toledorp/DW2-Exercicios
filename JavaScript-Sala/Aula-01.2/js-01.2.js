//Função Anônima
// function (n1, n2){
// return n1 + n2
//}
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`);

const tipo = typeof soma;
document.write(`${tipo}`);

//Arrow function (função anonima)
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do numero é ${dobro(900)}.</p>`);

// ARROW FUNCTION com mais de um parametro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
/* eval no JavaScrip é uma função nativa que realiza
calculos a partir de dois numeros e um operador entre parenteses 
OBS.: Arrow functio com um parametro não  precisa de parenteses*/
document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}.</p>`);

// Simplificando ARROW FUNCTIOn com um único retorno
const calculadora = (num1, operador, num2) => 
  eval(`${num1} ${operador} ${num2}`);
document.write(`<p>O resultado da operação é ${calculadora(1100, "+", 1)}.</p>`);


//IIFE - Função Imediata (Immediately Invoked Function Expression)

const iife = (function(){
    document.write("<p>Estou sendo executada imediatamenmte!</p>")
})();

//IIFE com Parametro
const loadUser = (function(user){
    document.write(
        `<p>Carregando as infromações do usuário: <strong> ${user}</strong>...</p>`
    )
})("Rogerio");