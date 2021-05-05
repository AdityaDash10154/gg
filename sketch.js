const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var engine,world; 
var object;

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  object = Bodies.Rectangle(200,100,50,50)
World.add(world,object)

}

function draw() {
  background(255,255,255);  
  drawSprites();
}