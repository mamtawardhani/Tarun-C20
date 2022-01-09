//namespacing
var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies

var en, wo
var box, ground

function setup(){
  createCanvas(400,400);

  //create an engine
  en = Engine.create()

  //access the world from the engine
  wo = en.world
  console.log(wo)

  var boptions = {restitution:0.8}
  box = Bodies.rectangle(200,10,50,50, boptions)
  World.add(wo, box)

  var goptions = {isStatic: true}   //JSON (javaScript object Notations)
  ground = Bodies.rectangle(200,350,400,20, goptions)
  World.add(wo, ground)
}

function draw() {
  background("blue");
  Engine.update(en)
 
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x, ground.position.y, 400,20)
}

//Nicknames 
//create an engine (universe)
//access the world from the engine
//create bodies, show them

