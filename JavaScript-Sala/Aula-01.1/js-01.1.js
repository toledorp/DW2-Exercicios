/* Variáveis podem ser declaradas de 03 formas:
* Var / Let e Const
Var : no geral evite o seu uso, pode nao ser muito seguro. Pode gerar duplicidade e com isso perde uma das variaveis
Let : Utilize quando for necessário reatribuir o valor da variável (declaração x atribuição)
      Declaração você cria uma variavel e deixa ela ja reservada. Atribuir é quando você atribui um valor para ela. 
      Quando o valor precisa ser reatribuido
Const : Não consegue reatribuir o valor. O valor fica fixo. Utilize quando nãop precisdar reatribuir o valor da variavel
        Ex. const cidade = "registro" - OK 
            const cidade = "pariquera" - não pode, o vlaor não pode ser reatribuido
        Obs. Tem que declarar e atribuir o valor
*/

/*
var nome = "rogerio"
var nome = "pupo"
let cidade = "registro"
let cidade = "pariquera" // não pode
let endereco
endereco = "Rua A"
const idade  // não pode
const idade = 18
idade = 20 // não pode
*/

//Tipos de funções
// Função Simples
const message = "<h2>Ola! Bem-vindo! Essa é sua primeira função!!</h2>";
function showMessage() {
  document.write(message);
}
//Invocando a função
showMessage();

//Função com Parametros
const user = "Rogerio Pupo";

function userMessage(user){
    //essa função recebe um parametro
    document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`)
    //${} = Template Strings / Literal Strings
    //è usado para inserir variaveis dentro do Strings (crases)
}
userMessage(user)
