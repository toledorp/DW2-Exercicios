//Objetos literais  possuem Atributos e Métodos
//Objetos literais porque não devira de uma classe

const pessoa = {};
document.write(typeof pessoa);

const carro ={
    modelo : "gol",
    cor : 'vermelho',
    acelerar(){
        return "Acelerando ...";
    },
    frear(){
        return "Freando ...";
    },
};

//Exibindo as propriedades do objetos
document.write(`<p>O modelo do carro é ${carro.modelo}.</p>`)
document.write(`<p>A cor do carro é ${carro.cor}.</p>`)
document.write(`<p>${carro.frear()}.</p>`)
document.write(`<p>${carro.acelerar()}.</p>`)

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao:"PC Moderno com bom desempenho."
}

document.write(`<p>O ${produto.nome} da marca ${produto.marca} custa apenas ${produto.preco}! ${produto.descricao}</p>`)

// ARRAY de Objetos
const listaProdutos = [
    {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao:"PC Moderno com bom desempenho."
    },

    {
    nome: "Tablet",
    marca: "Sansung",
    preco: 2000,
    descricao:"Ótima velocidade de processamento."
    },

    {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao:"Ultra resistente."
    },
];

// Exibindo o Array de objetos com forEach
listaProdutos.forEach(produto =>{
    document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preço: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `)
});