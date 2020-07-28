const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;
var g,base;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var rec;
var slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;
   Engine.run(engine);

g = new Ground(400,380,800,20);

base = new Ground(350,250,250,20)

box1 = new box(353,100,20,20);
box2 = new box(365,120,20,20);
box3 = new box(345,120,20,20);
box4 = new box(373,150,20,20);
box5 = new box(353,150,20,20);
box6 = new box(333,150,20,20);
box7 = new box(325,200,20,20);
box8 = new box(345,200,20,20);
box9 = new box(365,200,20,20);
box10 = new box(385,200,20,20);

rec = new rectangle(100,100,30,30)

slingshot = new SlingShot(rec.body,{x:100,y:100})
}

function draw() {
  background("black");  
g.display();
base.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

rec.display();

slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(rec.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  slingshot.attach(rec.body)
  }    
  }