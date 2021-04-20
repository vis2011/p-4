const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
  rubber=new Rubber(100,100,10,20);
  plane=new Plane(100,20,10,20);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    engine = Engine.create();
    world = engine.world;


    plane.display();
    hammer.display();
  rubber.display();
  plane.display();
    
 
}