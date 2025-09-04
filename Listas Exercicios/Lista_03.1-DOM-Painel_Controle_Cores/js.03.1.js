// Seleciona o container
const container = document.getElementById("container");

// Função para modo escuro
function ativarModoEscuro() {
  container.style.backgroundColor = "#121212"; // fundo escuro
  container.style.color = "white";
}

// Função para modo claro
function ativarModoClaro() {
  container.style.backgroundColor = "#d3d3d3"; // fundo cinza claro
  container.style.color = "black";
}
