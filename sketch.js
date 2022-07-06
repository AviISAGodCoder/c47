var bg,bgImg;
var player, hunterImg, hunter_hunting, lion, rhino, bear, bullet, scoreboard;


function preload(){
  
hunterImg = loadImage("./assets/hunter.png");
  hunter_hunting = loadImage("./assets/hunter_s.png");
  lion = loadImage("./assets/base_lion.png");
  bear = loadImage("./assets/bear.png");
  rhino = loadImage("./assets/rhino.png")
  bullet = loadImage("./assets/bullet.png");


  bgImg = loadImage("./assets/bg.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 3.8
  

player = createSprite(displayWidth-1700, displayHeight-300, 50, 50);
 player.addImage(hunterImg);
   player.scale =1.5;
 //  player.debug = true
 //  player.setCollider("rectangle",0,0,300,300)
}



function draw() {
  background(0); 

if(keyDown("space")||touches.length>0){
  player.y = player.y-30
}


if(keyWentDown("right_arrow")){
 bullet1 = createSprite(player.x+300, player.y, 50,50);
 bullet1.velocityX=10;
 bullet1.addImage(bullet);
 bullet1.scale=0.1;
  player.addImage(hunter_hunting)
 
}

else if(keyWentUp("right_arrow")){
  player.addImage(hunterImg)
}

spawnAnimals();

drawSprites();

}


function spawnAnimals()
{
  if(frameCount%100==0)
  {
    animal = createSprite(windowWidth, windowHeight-10, 100, 100);
    animal.velocityX = -20;
     var rand = Math.round(random(1,3));
     switch(rand)
     {
       case 1: animal.addImage(bear);
       break;
       case 2: animal.addImage(rhino);
       break;
       case 3: animal.addImage(lion);
       break;
            default:
              break;
     }
    }
  



}