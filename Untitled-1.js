let nome = prompt('digite seu nome');
let quantidadeXP = prompt('digite sua experiência');
let nivel;

if (quantidadeXP < 1000){
 nivel = "Ferro"
}
if (quantidadeXP > 1001 || quantidadeXP < 2000 ){
    nivel = "Bronze"
   }
   if (quantidadeXP < 2001|| quantidadeXP < 5000){
    nivel = "Prata"
   }
   if (quantidadeXP < 5001 || quantidadeXP < 7000){
    nivel = "Ouro"
   }
   if (quantidadeXP < 7001 || quantidadeXP < 8000){
    nivel = "Platina"
   }
   if (quantidadeXP < 8001 || quantidadeXP < 9000){
    nivel = "Ascendente"
   }
   if (quantidadeXP < 9001 || quantidadeXP < 10000){
    nivel = "Imortal"
   }
   if (quantidadeXP >= 10001){
    nivel = "Radiante"
   }

   console.log("O Herói de nome" + nome + "está no nível"  + nivel);
   console.log("Parabéns pelo seu nível");