
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var balls;
var blowers;
var blowerMouths;
var button;
var button1;
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;


  blowers = new Blower(300, 420, 300, 20);
  blowerMouths = new BlowerMouth(400,400, 100, 90);
  balls=new Ball(400,10,40)
   
button=createButton("Click to Blow");
button.position(width/2,height-200);
button.class("blowButton");
button.mousePressed(blow);

button1=createButton("Click to Blow to right");
button1.position(width/4,height-200);
button1.class("blowButton");
button1.mousePressed(right);

 rectMode(CENTER);
 ellipseMode(RADIUS);

}

function draw() {
  background(51);  
 
  Engine.update(engine);

  
 blowers.display();
 blowerMouths.display();
balls.display()
 
}


function blow(){
  Matter.Body.applyForce(balls.body,{x:0,y:0},{x:0,y:-0.05})
}
function right(){
  Matter.Body.applyForce(balls.body,{x:0,y:0},{x:0.05,y:0})
}