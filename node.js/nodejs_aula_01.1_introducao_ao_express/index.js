// começa o projeto importando o express (framework)
const express = require("express");
// Iniciando o express na variavel app
const app = express();

//Configurando o EJS
app.set('view engine', 'ejs')

// criando a primeira rota do site (rota principal)
// req = trata a requisicao - Res = trata a resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello Word! Ben-vindo ao meu primeiro site com Node.js e Express =)</h1>"
  );
});

//Rota de produtos do site
app.get("/produtos", (req, res) => {
  res.send("<h1>Ben-vindo a página de Produtos!</h1>");
});

//Rota de clientes
app.get("/clientes", (req, res)=>{
    res.send("<h1>Ben-vindo a página de Clientes!</h1>")
});

// para instalar o inicializador automatico do servidor digite no terminal : npm install nodemon
//Iniciando o servidor http
// o servidor excutara na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possivel iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
// para iniciar o projeto acessa o terminal e digita : node index.js
