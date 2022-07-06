
var trex ,trex_running, ground; 
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  trex=createSprite(50,170,50,50)
  trex.addAnimation("trex",trex_running)
  trex.scale=0.7

  ground=createSprite(300,200,600,10)
  
}

function draw(){
  background("white")

  if (keyDown("space")) {
      trex.velocityY=-8
      
  }
  
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
  drawSprites()
}