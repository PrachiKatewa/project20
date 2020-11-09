var car , wall;
var speed , weight;

function setup() {
  createCanvas(800,800);
 car = createSprite(200, 400, 50, 50);
 wall = createSprite(400,400,20,height/2);

 car.shapeColor = "blue";
 wall.shapeColor = "brown";

 
 car.velociyX = speed;

 speed=random(55,90);
weight=random(400,1500);

 
}

function draw() {
  background(0);  

 

if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
var deformation = 0.5*speed*weight*speed/22509;
if(deformation>180){
car.shapeColor = "red";
}
if(deformation<180 && deformation>100){
car.shapeColor = "yellow";
}
if(deformation<100){
car.shapeColor = "green";
}
}
  drawSprites();
}