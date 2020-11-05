
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground
var bin1
var bin2
var bin3



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
	var ground_options ={
        isStatic: true,
        density:3.0
        
    }

    ground = Bodies.rectangle(400,700,800,30,ground_options);
    World.add(world,ground);

    
	//Create the Bodies Here.

   bin1 = new Bin(560,650,20,100);
   bin2 = new Bin(630,680,120,20);
   bin3 = new Bin(700,650,20,100);
   paper1 = new Paper(200,200,60);

	//Engine.run(engine);
  
}


function draw() {
  
  background(255);
  Engine.update(engine);
  rectMode(CENTER);

  paper1.display();
  rect(ground.position.x,ground.position.y,800,20);
  bin1.display();
  bin2.display();
  bin3.display();
  
 
 
}


function keyPressed(){

if(keyCode === UP_ARROW){
  console.log("hello");
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:105,y:-95});
}

}



