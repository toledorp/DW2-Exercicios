// 1. Criar array de objetos

const lista_Clientes = [
    {
        nome: "João Pedro",
        endereco:"Av. Paulista, 182 - São Paulo / SP",
        cpf: 75395112389
    },
    
    {
        nome: "Fabiano Gusmão",
        endereco: "Rua Janio Quadros, 652 - Belo Horizonte / MG",
        cpf: 15975345602
    },

    {
        nome: "Andreia de Castro",
        endereco: "Av. Brasil, 963 - Santos / SP",
        cpf: 78932149238
    }
]

// 2. Usar forEach para exibir os dados
document.write("<br><strong>Criação do Array:</strong><br>");
lista_Clientes.forEach(cliente =>{
    document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});

// 3. Adicionar novo cliente ao FINAL
let cliente_Final = { 
    nome: "Lucas Pereira", 
    endereco: "Rua Nova, 101", 
    cpf: 99887766554 };
lista_Clientes.push(cliente_Final);

// Exibir lista atualizada
document.write("<br><strong>Após adicionar ao FINAL:</strong><br>");
lista_Clientes.forEach(function(cliente) {
    document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});

// 4. Adicionar novo cliente ao INÍCIO
let cliente_Inicio = { 
    nome: "Fernanda Costa", 
    endereco: "Av. Norte, 202", 
    cpf: 55443322110 };
lista_Clientes.unshift(cliente_Inicio);

// Exibir lista atualizada
document.write("<br><strong>Após adicionar ao INÍCIO:</strong><br>");
lista_Clientes.forEach(function(cliente) {
      document.write(`
        Cliente: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `)
});


