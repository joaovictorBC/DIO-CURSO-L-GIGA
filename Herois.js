class Herois{
    constructor(nome, idade, origem){
        this.nomeHeroi = nome;
        this.Idade = idade;
        this.raca = origem;
    }
    atacar(){
        console.log(`O ${origem} atacou o inimigo usando ${ataque}`)
        if (origem == mago){
            ataque = "magia";
        } 
        if (origem == arqueiro){
            ataque = "arco";
        } 
        if (origem == monge){
            ataque = "artes marciais";
        } 
    }
}

    let Aventura = new Herois(Carlos, 28, "mago");

    Aventura.atacar();