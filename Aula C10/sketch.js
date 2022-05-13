var gols = [1,0,3,2,0,1,2,3,0,1,0,1,2,2,1];

function mediaGols(){
 var soma = gols[0] + gols[1] + gols[2] + gols[3] + gols[4] + gols[5] 
 + gols[6] + gols[7] + gols[8] + gols[9] + gols[10]  + gols[11] + gols[12] + gols[13] + gols[14]

 console.log ("Gols:" + soma);
 console.log("Jogos:" + gols.length);

 var media = soma/gols.length;
 console.log("Média de gols p/ jogo:" + media);

}





function setup() 
{
  createCanvas(400,400);
  mediaGols();
}

function draw() 
{
background(51);

}

