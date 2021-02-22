var fixedRec, movingRec;

function setup() {
  createCanvas(800,400);

  fixedRec = createSprite(400, 200, 100, 50);
  fixedRec.shapeColor = "red";

  movingRec = createSprite(600, 200, 100, 50);
  movingRec.shapeColor = "red";
}

function draw() {
  background(0); 
  
  movingRec.x = mouseX;  
  movingRec.y = mouseY;

  fixedRec.debug = true;
  movingRec.debug = true;

  console.log(fixedRec.x - movingRec.x);

  if(movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2
  && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2 
  && fixedRec.y - movingRec.y < fixedRec.height/2 + movingRec.height/2
  && movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height/2){
    movingRec.shapeColor = "green";
    fixedRec.shapeColor = "green";
  }else{
    movingRec.shapeColor = "red";
    fixedRec.shapeColor = "red";
  }
    
  drawSprites();
}