//Classes no JavaScript

// Criando uma classe (nome de classe primeira letra maiúscula)

class Carro {
    // Para criar os atributos da classe deve se utilizar o metodo "constructor"
    constructor(marca, modelo, ano){
        //this representa a instancia (objeto)
        //O valor que for enviado a classe será atribuido a instancia
        
        //Atributos
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //Metodos
    buzinar(){
        return "Beep! Beep!";
    }
}

// Criando Instancias (objetos) derivadas da classe carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(`<p>O  carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano}
    . Quando buzina faz ${carroPopular.buzinar()}</p>`
);

//Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024

document.write(`<p>O  carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano}
    . Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

//Adicionar novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionar novo metodo
carroEsportivo.turbo = () =>{
    return "Vrummmm! O carro está acelerando muito!!!";
};
document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} 
    também possui neon da cor ${carroEsportivo.corNeon}.<br>
    E quando usa turbo ${carroEsportivo.turbo()}</p>`)