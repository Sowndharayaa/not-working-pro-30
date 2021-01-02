const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
// const Constraint = Matter.Constraint;
// const Render = Matter.Render;

//var box1,box2;
var hexa;

function preload()
{
   hexa = loadImage("polygon.png");
}

function setup() {
	createCanvas(1500,500);

	engine = Engine.create();
  world = engine.world;

  Polygon = Bodies.circle(50,200,20);
  World.add(world,Polygon);
  Slingshot = new Chain(this.Polygon,{x:100,y:200});

  stand = new Ground (650,450,250,8);
  stand1 = new Ground (1011,250,250,8);

  block1 = new Box(650,425,30,40);
  block2 = new Box(620,425,30,40);  
  block3 = new Box(590,425,30,40);
  block4 = new Box(560,425,30,40);
  block5 = new Box(680,425,30,40);
  block6 = new Box(710,425,30,40);
  block7 = new Box(740,425,30,40);
  block8 = new Box(650,385,30,40);
  block9 = new Box(620,385,30,40);
  block10 = new Box(590,385,30,40);
  block11 = new Box(560,425,30,40);
  block12 = new Box(680,385,30,40);
  block13 = new Box(710,385,30,40);

  block13 = new Box(680,345,30,40);
  block14 = new Box(650,345,30,40);
  block15 = new Box(620,345,30,40);
  block16 = new Box(650,305,30,40);
  block17 = new Box(710,385,30,40);

  box1 = new Box (1011,225,30,40);
  box2 = new Box (981,225,30,40);
  box3 = new Box (951,225,30,40);
  box4 = new Box (921,225,30,40);  
  box5 = new Box (1101,225,30,40);
  box6 = new Box (1041,225,30,40);
  box7 = new Box (1071,225,30,40);

  box8 = new Box (1011,185,30,40);
  box9 = new Box (981,185,30,40);
  box10 = new Box (951,185,30,40);
  box11 = new Box (1041,185,30,40);
  box12 = new Box (1071,185,30,40);

  box13 = new Box (1011,145,30,40);
  box14 = new Box (981,145,30,40);
  box15 = new Box (1041,145,30,40);

  box16 = new Box (1011,105,30,40);

  
  

  // var render = Render.create({
  //   element:document.body,
  //   engine:engine,
  //   options:{
  //     width:1500,
  //     height:700
  //   }
  // })
  // Render.run(render)

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("grey");
  stand.display();
  stand1.display();
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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  image(hexa,Polygon.position.x,Polygon.position.y,40,40);
}