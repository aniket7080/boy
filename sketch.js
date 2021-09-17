
var boy1;

function preload(){ 
  boy1 = loadImage("boy1")

 
}





function setup() {
  createCanvas(400,400);
  boy1 = createSprite(200,200,10,10)
  boy1.addImage("boy",boy1)
  
  
  
}

function draw() {
 background("black");
  
  
  drawSprites();

  }
  

 

 

 

