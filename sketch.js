
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	minigame1_img = loadImage("./images/mini_game1.png");
  
	crate1_img = loadImage("./images/crate1.png") ;
	crate2_img = loadImage("./images/crate2.png") ;
	crate3_img = loadImage("./images/crate3.png");
  
}

function setup() {
	createCanvas(700, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//crates
	var crate1=createSprite(500,200,100,100);
	crate1.addImage("crate1",crate1_img);
	crate1.scale = 0.25;
  
	var crate2=createSprite(520,250,100,100);
	crate2.addImage("crate2",crate2_img);
	crate2.scale = 0.2;
  
	var crate3=createSprite(550,300,100,100);
	crate3.addImage("crate3",crate3_img);
	crate3.scale = 0.32;

	//buttons
	var button=createImg("./images/button1.png");
	button.position(200,130);
	button.size(80,50);
  
	var button2=createImg("./images/button1.png");
	button2.position(375,50);
	button2.size(80,50);
  
	var crane=createImg("./images/crane.png");
	crane.position(258,45);
	crane.size(100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(minigame1_img);  
  
  drawSprites();
 
}

  
