// Classe base Heroi
class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  //metodos

  correr() {
    return `${this.nome} está correndo!`;
  }

  andar() {
    return `${this.nome} está andando.`;
  }

  atacar() {
    return `${this.nome} está atacando!`;
  }

  defender() {
    return `${this.nome} está se defendendo.`;
  }
}

// Homem-Aranha
class HomemAranha extends Heroi {
  constructor(nome, vida, velocidade, forca, teia) {
    super(nome, vida, velocidade, forca);
    this.teia = teia; // 0 ou 1
  }

  sentidoAranha() {
    return `${this.nome} detectou perigo com seu sentido aranha!`;
  }
}

// Superman
class Superman extends Heroi {
  constructor(nome, vida, velocidade, forca, podeVoar) {
    super(nome, vida, velocidade, forca);
    this.podeVoar = podeVoar; // 0 ou 1
  }

  visaoCalor() {
    return `${this.nome} está usando sua visão de calor!`;
  }
}

// Batman
class Batman extends Heroi {
  constructor(nome, vida, velocidade, forca, esconder) {
    super(nome, vida, velocidade, forca);
    this.esconder = esconder; // 0 ou 1
  }

  investigar() {
    return `${this.nome} está investigando um crime...`;
  }
}

// Instanciando os heróis
const homemAranha = new HomemAranha("Homem-Aranha", 100, 80, 70, 1);
const superman = new Superman("Superman", 150, 100, 120, 1);
const batman = new Batman("Batman", 90, 60, 85, 0);


document.write(`<h2>Heróis Criados</h2>
<p>${homemAranha.nome}<br> Vida ${homemAranha.vida}<br> Velocidade ${homemAranha.velocidade}<br> Força ${homemAranha.forca}<br> Teia ${homemAranha.teia}.<br>
${homemAranha.atacar()}<br> ${homemAranha.sentidoAranha()}.</p>  

<p>${superman.nome}<br> Vida ${superman.vida}<br> Velocidade ${superman.velocidade}<br> Força ${superman.forca}<br> Pode Voar ${superman.podeVoar}<br>
${superman.atacar()}<br> ${superman.visaoCalor()}.  
</p>

<p>${batman.nome}<br> Vida ${batman.vida}<br> Velocidade ${batman.velocidade}<br> Força ${batman.forca}<br> Esconder ${batman.esconder}<br>
${batman.correr()}<br> ${batman.investigar()}.
</p>
`);
