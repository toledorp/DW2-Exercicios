// capturando elementos do DOM

function parar(){
    document.getElementById("parar").style.backgroundColor = "red"
    document.getElementById("atencao").style.backgroundColor = "gray"
    document.getElementById("prosseguir").style.backgroundColor = "gray"
}

function atencao(){
    document.getElementById("atencao").style.backgroundColor = "yellow"
    document.getElementById("parar").style.backgroundColor = "gray"
    document.getElementById("prosseguir").style.backgroundColor = "gray"
}

function prosseguir(){
    document.querySelector("#prosseguir").style.backgroundColor = "green"
    document.getElementById("#atencao").style.backgroundColor = "gray"
    document.getElementById("#parar").style.backgroundColor = "gray"
}