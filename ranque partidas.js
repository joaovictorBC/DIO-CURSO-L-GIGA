let nome = prompt('digite seu nome');
let saldoVitoria;
let nivel;
let vitoria = prompt("Quantidade de vitórias")


function calculoRank(vitoria){
    if (vitoria < 10){
        nivel = "Ferro"
       }
          if (vitoria < 11|| vitoria < 20){
           nivel = "Bronze"
          }
          if (vitoria < 21 || vitoria < 50){
           nivel = "Prata"
          }
          if (vitoria < 51 || vitoria < 80){
           nivel = "Ouro"
          }
          if (vitoria < 81 || vitoria < 90){
           nivel = "Diamante"
          }
          if (vitoria < 91 || vitoria < 100){
           nivel = "Lendario"
          }
          if (vitoria >= 101){
           nivel = "Imortal"
          }
          return nivel
}
 
   console.log("O Herói tem saldo de vitórias de:  " + vitoria + "está no nível"  + nivel);
   console.log("Parabéns pelo seu nível");