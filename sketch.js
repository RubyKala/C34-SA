const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

//TASK 1 CREATE GROUND
  
//WRITE BOXES HERE
  box1 = new Box(900, 100, 70, 70);
 
//WRITE BALL AND ROPE HERE


}

function draw() {
  background(180);
  Engine.update(engine);
 
  //TASK 2 DISPLAY GROUND
 
  //TASK 3 CREATE BOX CLASS
  
  //TASK 4 DISPLAY BOXES 
  box1.display();
 
  
//TASK 6 DISPLAY BALL
 
//TASK 7 MAKE ROPE CLASS AND DISPLAY IT 
 



}

//TASK 8 FINAL 
function mouseDragged() {
  
}


