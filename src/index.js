class heroi{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar(){
        let ataque;
        switch (this.tipo) {
            case "Mago implacavel":
              ataque = "magia de fogo";
              break;
            case "Guerreiro":
              ataque = "espada cortante";
              break;
            case "Monge":
              ataque = "artes marciais";
              break;
            case "Ninja":
              ataque = "shuriken";
        }
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

heroi1 = new heroi("Patolino", 1500000, "Mago implacavel");
heroi1.atacar();

heroi2 = new heroi("Um cara que usa espada", 40, "Guerreiro");
heroi2.atacar();

heroi3 = new heroi("Tranquilo careca", 64, "Monge");
heroi3.atacar();

heroi4 = new heroi("Kamui", 31, "Ninja");
heroi4.atacar();