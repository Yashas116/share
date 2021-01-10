const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var boy,img;
var mang1,mang2,mang3,mang4,mang5,mang6,mang7,mang8;
var tree;
var chain;

function preload()
{
	img=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new TreeBaseClass(600,450,265,550);
	mang1 = new mango(300,110,30);
	mang2 = new mango(337,153,30);
	mang3 = new mango(238,186,30);
	mang4 = new mango(307,128,30);
	mang5 = new mango(342,196,30);
	mang6 = new mango(326,183,30);
	mang7 = new mango(287,170,30);
  mang8 = new mango(313,183,30);
  stone = new stoneBaseClass(100,500,40,40);
	chain = new Chain(stone.body,{x:100,y:500});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(250);
  tree.display();
  stone.display();
  mang1.display();
  mang2.display();
  mang3.display();
  mang4.display();
  mang5.display();
  mang6.display();
  mang7.display();
  mang8.display();
  chain.display();
  image(img,30,590,90,130)
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.tnt();
}