// Métodos de manipulação de vetores
let vetor = ['Laranja ', ' Maça', " Banana"]
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)

vetor[3] = ' Morango'
document.write(`<p>Agora o nosso vetor é o : ${vetor}</p>`)

//Push insere um novo vetor no final do vetor:
vetor.push(' Abacaxi')
document.write(`<p>Agora o nosso vetor é o : ${vetor}</p>`)

vetor[0] = ' Pera'
document.write(`<p>Agora o nosso vetor é o : ${vetor}</p>`)
//Cuidado. Não adiciona novo elemento, apenas substitui o que existia por um novo

//UNSHIFT - Insere um novo elemento no Inicio do Vetor:
vetor.unshift('Laranja')
document.write(`<p>Agora o nosso vetor é o : ${vetor}</p>`)

//LENGTH - Retorna o numero de elementos no vetor
let numbers = [6, 8, 2, 9, 3, 800, 200]
document.write(`<p>Agora o nosso vetor é o : ${numbers}</p>`)
document.write(`<p>O numero total de elementos deste vetor é ${numbers.length}</p>`)

// SORT - Ordena o vetor
let numbersOrdenado = numbers.sort()
document.write(`<p>Agora o nosso vetor ordenado é o : ${numbersOrdenado}</p>`)
document.write(`<p>A Lista de Frutas ordenada é  : ${vetor.sort()}</p>`)

//Ordenado um vetor numerico em ordem crescente:
document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`)

//Ordenado um vetor numerico em ordem decrescente:
document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`)