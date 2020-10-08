 var backgroundImg;
 var dustbinG,dustbinL,DustbinR;
 var ball;
 var ground;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 function preload(){
 }

 function setup() {
  createCanvas(800, 700);

  rectMode(CENTER);

  // CREATE PHYSICS ENGINE
  engine = Engine.create();
  world = engine.world;

  // EXECUTE THE CLASS
  // GROUND CLASS
  ground = new Ground(400,695,800,15);

  //DUSTBIN CLASS
  dustbinG = new Dustbin(650,685,50,10);
  dustbinL = new Dustbin(600,650,10,35);
  dustbinR = new Dustbin(700,650,10,35);

  // PAPER CLASS
  ball = new Paper(600,600,0.9);

  Engine.run(engine);
  
}

 function draw() {
  rectMode(CENTER);

  // BACKGROUND COLOR
  background(0);

  // DISPLAY PHYSICS BODIES
  ground.display();
  ball.display();

  // DISPLAY SPRITES
  drawSprites();
 
}

 function keyPressed() {
  if (keyCode === UP_ARROW) {

    // TO THROW THE BALL AT FRONT INTO THE DUSTBIN WHEN THE UP ARROR KEY IS PRESSED
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y=-85});

  }
}



