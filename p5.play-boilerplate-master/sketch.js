
var moving,fix
function setup() {
  createCanvas(800,400);
  
  fix=createSprite(400, 200, 50, 50);

moving=createSprite(400,200,50,50)
}

function draw() {
  
  background(255,255,255);  
  moving.x=mouseX
  moving.y=mouseY
if(moving.x-fix.x<moving.width/2+fix.width/2
  && fix.x-moving.x<moving.width/2+fix.width/2
  && moving.y-fix.y<moving.height/2+fix.height/2
  && fix.y-moving.y<fix.height/2+moving.height/2){
moving.shapeColor="black"
fix.shapeColor="red"
}else{
  moving.shapeColor="green"
  fix.shapeColor="green"
}


  drawSprites();
}