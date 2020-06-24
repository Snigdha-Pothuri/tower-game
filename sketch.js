

var gamestate = "ONSLING" 

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  
  box1=new box (330,235,30,40)
  box2= new box(360,235,30,40)
  box3=new box(390,235,30,40)
  box4=new box(420,235,30,40)
  box5=new box(450,235,30,40)
  box6=new box(360,195,30,40)
  box7=new box(390,195,30,40)
  box8=new box(420,195,30,40)
  box9=new box(390,155,30,40)

 polygon= Bodies.circle(50,200,20); 
 World.add(world,polygon);

 sling = new SlingShot(this.polygon,{x:100,y:200}) 


  drawSprites();
} 
function mouseDragged(){
  if(gamestate!== "launched"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){

  sling.fly();
  gamestate="launched"  
}