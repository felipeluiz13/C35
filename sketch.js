var ball;
var database,position;

function setup(){
  createCanvas(500,500);
  database = firebase.database ()
  ball = createSprite(250,250,20,20);
  ball.shapeColor = "orange";
  var ballPos = database.ref ("ball/position")
  ballPos.on ("value",readPosition)
}

function draw(){
  background("white");

  if(keyIsDown(RIGHT_ARROW)){
    writePosition (5,0)
  }
  
  if(keyIsDown(LEFT_ARROW)){
    writePosition (-5,0)
  }

  if(keyIsDown(UP_ARROW)){
    writePosition (0,-5)
  }

  if(keyIsDown(DOWN_ARROW)){
    writePosition (0,5)
  }

  drawSprites();
  
}

function readPosition (data) {
  position = data.val ();
  ball.x = position.x;
  ball.y = position.y;
}

function writePosition (x,y) {
  database.ref ("ball/position").set ({
    "x": position.x + x,
    "y": position.y + y
  })
}