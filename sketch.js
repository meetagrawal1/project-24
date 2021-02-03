const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1285,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,585,1400,20);
	ball = new Ball(200,450,40);
	dustbin =new Dustbin(1000,570);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  ground.display();
 ball.display();
 dustbin.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
  
	}
}
