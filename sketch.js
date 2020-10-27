

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var chain;
var chain2;
var chain3;
var chain4;
var chain5;
var roof;
var chain;
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400, 150, 300, 20);
	ball3 = new Paper(400, 400, 25);
	ball2 = new Paper(350, 400, 25);
	ball4 = new Paper(450, 400, 25);
	ball1 = new Paper(300, 400, 25);  
	ball5 = new Paper(500, 400,25);
	// rope1 =new Rope (ball1.body, roof.body);
	// chain = new Chain(ball1.body, roof.body, 2/2, 0);
	// chain2 = new Chain(ball2.body, roof.body, 2/2, 0);
	// chain3 = new Chain(ball3.body, roof.body, 2/2, 0);
	// chain4 = new Chain(ball4.body, roof.body, 2/2, 0);
	// chain5 = new Chain(ball5.body, roof.body, 2/2, 0);
	chain = new Chain(ball1.body, roof.body, -100, 0);
	chain2 = new Chain(ball2.body, roof.body, -50, 0);
	chain3 = new Chain(ball3.body, roof.body, 0, 0);   
	chain4 = new Chain(ball4.body, roof.body, 50, 0);
	chain5 = new Chain(ball5.body, roof.body, 100, 0);
	Engine.run(engine);
  
}


function draw() {
//   rectMode(CENTER);
  background("grey");
  roof.display();
  
 
//   drawSprites();
chain.display();
chain2.display();
chain3.display();      
chain4.display();
chain5.display();
ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 keyPressed();

}

function keyPressed()
{
   if(keyCode === LEFT_ARROW)
   {
	
	   Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-100, y:-100});


   } 
}



