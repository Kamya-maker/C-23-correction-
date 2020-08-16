const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tri1,tri2,tri3;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    World.add(world,engine);
  createSprite(400, 200, 50, 50);
 tri1=new Triangle(250,150,5,6);

}

function draw(){
  background(0);
  Engine.update(engine);
 tri1.display();



  drawSprites()
}