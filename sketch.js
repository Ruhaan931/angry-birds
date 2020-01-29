const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState =" onSling"


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,50);

    log1 = new Log(690,290,150,PI)
    log2 = new Log(840,270,150,-PI)
    log3 = new Log(760,210,200,PI/2)
    log4 = new Log(750,120,200,PI/2)

    box1 = new Box(690,160,70,70)
    box2 = new Box(830,190,70,70)

    pig1 = new Pig(770,350)
    pig2 = new Pig(750,140)
    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    bird.display();
    platform.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    box1.display();
    box2.display();

pig1.display();
pig2.display();

    slingshot.display();    
}

function mouseDragged(){

    if(gameState!=="launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launch"
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}