var weight = [35,38,42,45,43,34,36,41,48,32];
var soma = 0;
var media;
function setup() {
  createCanvas(400,400);

for (var i = 0; i < weight.length; i++) {
  soma += weight[i];
  }
  media = soma/weight.length;
console.log("Média:" + media);
console.log(weight);
}

function draw() 
{
  background(30);
}

 

