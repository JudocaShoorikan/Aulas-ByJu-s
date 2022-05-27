var bola = {
  x: 40,
  y: 30,
  tamanho: 30,
  cor: ['blue', 'red', 'green', 'yelow'],
  velocidadeX: 1
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(bola.x, bola.y, bola.tamanho);
  fill(bola.cor [1]);
  bola.x += bola.velocidadeX;
}