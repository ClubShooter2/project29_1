const Engine = Matter.Engine; 
const World= Matter.World;
 const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
var engine,world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var block17;
var base1;
var object1;
var sling;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
 world = engine.world;
//base/level
base1 = new Ground(400,195,100,10);
//object
object1 = Bodies.rectangle(50,200,50,50);
sling = new Sling(object1,{x:428,y:195});

  //level1
  block1 = new block(330,225,30,40);
 block2 = new block(360,235,30,40);
 block3 = new block(390,235,30,40);
 block4 = new block(420,235,30,40);
 block5 = new block(450,235,30,40);
 block6 = new block(480,235,30,40);
 //level2
 block7 = new block(360,195,30,40);
 block8 = new block(390,195,30,40);
 block9 = new block(420,195,30,40);
 block10 = new block(450,195,30,40);
 block11 = new block(480,195,30,40); 
 //level3
 block12 = new block(300,275,30,40);
 block13 = new block(330,275,30,40);
 block14 = new block(360,375,30,40);
 block15 = new block(390,375,30,40);
 block16 = new block(420,375,30,40);
 block15 = new block(450,375,30,40);
 block16 = new block(480,375,30,40);
 block17 = new block(510,375,30,40);
}


function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
  base1.display();
 // object1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
//object1.display();
sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(object1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}
 function keyPressed() {
 if(keyCode === 32) {
   attach(pig.body, this.sling.body);
 }
 }