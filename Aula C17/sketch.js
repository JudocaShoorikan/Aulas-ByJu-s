var box;
function setup() 
{
  createCanvas(400, 400);
  box = new Box(20, 0, 100, 100, 1, 1 );
}

function draw() 
{
  background(220);
  box.show();
  box.move();
}

