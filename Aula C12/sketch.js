var marks = [35,38,42,45,43,34,46,41,48,32];

function setup() {
  createCanvas(400,400);

  for(var i = 0; i < 9; i++){
    if (marks[i] < 40){
      console.log (marks[i])
    }
  }
}

function draw() 
{
  background(30);
}