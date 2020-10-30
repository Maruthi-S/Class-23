const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myengine,world;
var ground,box1,box2;
function setup() {
  createCanvas(400,400);
 myengine =Engine.create();
 world = myengine.world;


 box1 = new Box(200,300,50,50);
 box2 = new Box(240,100,50,100);

 ground = new Ground(200,390,400,20);

 /*var options={
   isStatic:true
 }
 ground= Bodies.rectangle(200,380,400,20,options);
 World.add(world,ground);
 var ball_options={
   restitution:1.0
 }
 
 ball =Bodies.circle(200,200,30,ball_options);
 World.add(world,ball);*/
}

function draw() {
  background(0);  
Engine.update(myengine);

   box1.display();
   box2.display();
   ground.display();
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);*/
  
}
