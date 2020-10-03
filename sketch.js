var fixedrect,moviningrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 80);
  movingrect=createSprite(400,800,90,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  movingrect.velocityY=-4;
  fixedrect.velocityY=4;
}

function draw() {
  background(255,255,255); 
 // movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
    }
    if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 )
    {
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);
    }
  drawSprites();
}