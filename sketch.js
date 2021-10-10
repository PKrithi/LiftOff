var alien, alienImg, alienGroup;
var rocket, rocketImg;
var spaceBackground, spaceBackgroundImg;
var gamestate = "play";
//var gamestate = "end";

function preload(){
    alienImg = loadImage("alien.png");
    rocketImg = loadImage("rocketShip.png");
    spaceBackgroundImg = loadImage("spaceBackground.jpeg");
}

function setup(){
    createCanvas(600,600);

    alienGroup = createGroup();

    spaceBackground = createSprite(600,600);
    spaceBackground.addImage(spaceBackgroundImg);
    spaceBackground.scale = 1.5;
    spaceBackground.velocityY = 3;

    rocket = createSprite(250,500,50,50);
    rocket.addImage(rocketImg);
    rocket.scale = 0.1;


}

function draw(){
    background("spaceBackground");

    if(gamestate == "play"){

        rocket.x = World.mouseX;

        if(spaceBackground.y > 400){
            spaceBackground.y = 300;
        }
    
        createAlien();
    }


    if(alienGroup.isTouching(rocket)){
        ghost.destroy();
        gameState = "end";
        rocket.velocityY = 0;
      }

    if(gamestate == "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        //text("Aliens have invaded your ship.", 300,300);
    }
    createAlien();

    drawSprites();
}

function createAlien() {
    
     if (frameCount % 100 === 0) {
      alien = createSprite(600,100,40,10);
      alien.x = Math.round(random(0,600));
      alien.addImage(alienImg);
      alien.scale = 0.2;
      alien.velocityY = 3;

      alienGroup.add(alien);
     }
    }
