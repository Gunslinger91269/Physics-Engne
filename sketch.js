const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    alien1 = new alien(600,320,70,100);
    alien2 = new alien(920,320,70,70);
    alien3 = new alien(810, 350,70,70);

    alien5 = new alien(700,240,70,70);
    alien6 = new alien(920,240,70,70);
    alien7 = new alien(810, 220,70,70);

    alien8 = new alien(810,160,70,70);

    bird = new circle(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255,250,5);
    Engine.update(engine);
    alien1.display()
    alien2.display()
    alien3.display()  
    alien5.display() 
    alien6.display() 
    alien7.display() 
    alien8.display() 
    ground.display();


    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}