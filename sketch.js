const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "ONSLING" 

function setup() {
  createCanvas(800,400); 
 
  engine = Engine.create();
  world = engine.world;
 

  box1=new Box (330,235,30,40)
  box2= new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40) 
  box6=new Box(360,195,30,40)
  box7=new Box(390,195,30,40)
  box8=new Box(420,195,30,40)
  box9=new Box(390,155,30,40)

 polygon1 = new polygon(150,150,20);
  
 slingshot = new SlingShot(polygon1.body,{x:200, y:200});

  ground= new Ground(200,395,800,50)
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine); 

 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display(); 

  polygon1.display(); 

  slingshot.display(); 

  ground.display();


 


  drawSprites();
} 
function mouseDragged(){
  if (gameState!=="launched"){
       Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}