var car,speed,weight; 
 var car2,car3;
 var w1,w2;
 var wall, wall2,wall3;
 
 
 
 
 function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

  car= createSprite(25, 60, 30, 30);
  car.velocityX =speed;
  car.shapeColor=color(255)
  
  wall=createSprite(750,70,15,80)
  wall.shapeColor=color(80,80,80)
  car1= createSprite(25, 180,30, 30);
  car1.velocityX = speed
  car1.shapeColor=color(255)
  car2 =createSprite(25, 300, 30, 30);
  car2.velocityX = speed
  car2.shapeColor=color(255)
  wall2=createSprite(750,190,15,80)
  wall3=createSprite(750,300,15,80)
  wall2.shapeColor=color(80,80,80)
wall3.shapeColor=color(80,80,80)

  w1=createSprite(0,130,1600,5)
  w2=createSprite(0,250,1600,5)



}

function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0
var deformation=0.5*weight*speed*speed/22509
if(deformation>180)
{
  car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}
  }

  if(wall3.x-car2.x<(car2.width+wall3.width)/2)
  {
car2.velocityX=0
var deformation1=0.9*weight*speed*speed/22509
if(deformation1>180)
{
  car2.shapeColor=color(255,0,0)
}
if(deformation1<180 && deformation1>100)
{
  car2.shapeColor=color(230,230,0);
}
if(deformation1<100)
{
  car2.shapeColor=color(0,255,0)
}
  }
  if(wall2.x-car1.x<(car1.width+wall2.width)/2)
  {
car1.velocityX=0
var deformation2=0.45*weight*speed*speed/22509
if(deformation2>180)
{
  car1.shapeColor=color(255,0,0)
}
if(deformation2<180 && deformation2>100)
{
  car1.shapeColor=color(230,230,0);
}
if(deformation2<100)
{
  car1.shapeColor=color(0,255,0)
}
  }


  drawSprites();
}