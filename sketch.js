//~~~~~~~~~VARIABLES~~~~~~~~~
var path;
var runner;
var wallLeft;
var wallRight;
var bomb1;
var bomb2;
var bomb3;
var bomb4;
var bomb;
var score = 0;
var lifeTime;

function preload(){

  pathImg = loadAnimation("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  bombImg = loadImage("bomb.png");

}


function setup(){

  createCanvas(600,600);

  path = createSprite(300,0);
  path.addAnimation("path", pathImg);
  path.scale = 1.8;
  path.velocityY = 6;
  
  runner = createSprite(200,300);
  runner.addAnimation("runner", runnerImg);
  runner.scale = 0.08;

  bomb1 = createSprite(135,-500);
    bomb1.addImage(bombImg);
    bomb1.scale = 0.15;
    bomb1.velocityY = 6;
 

    bomb2 = createSprite(310,-300);
    bomb2.addImage(bombImg);
    bomb2.scale = 0.15;
    bomb2.velocityY = 6;
 
  
    bomb3 = createSprite(480,-600);
    bomb3.addImage(bombImg);
    bomb3.scale = 0.15;
    bomb3.velocityY = 6;
 
}


function draw() {
  background(0);
  drawSprites();

  runner.x = World.mouseX;

  textSize(20);
  fill(255,0,0);
  text("Score: "+ score, 500,30);
  score = score +1;

  wallLeft = createSprite (25,300,80,500);
  runner.bounceOff(wallLeft);
  wallLeft.visible = false;

  wallRight = createSprite(585,300,80,500);
  runner.bounceOff(wallRight);
  wallRight.visible = false;


  if( path.y > 600 )
    path.y = 1;
  
  if( bomb1.y > 600 )
    bomb1.y = 1;

  if( bomb2.y > 600 )
    bomb2.y = 1;
  
  if( bomb3.y > 600 )
    bomb3.y = 1;


//~~~~~~~~~~~~BOMB-1~~~~~~~~~~~~
  if( runner.isTouching(bomb1) )
  runner.visible = false;

  if( runner.isTouching(bomb1) )
  path.velocityY = 0;

  if( runner.isTouching(bomb1) )
  path.visible = false;

  if( runner.isTouching(bomb1) )
  bomb1.visible = false;

  if( runner.isTouching(bomb1) )
  bomb2.visible = false;

  if( runner.isTouching(bomb1) )
  bomb3.visible = false;

  if(runner.isTouching(bomb1))
  text("GameOver!",300,300)
  
  if(runner.isTouching(bomb1)){
  score = score -1;
  gameOver();
  }


  //~~~~~~~~~~~~bomb-2~~~~~~~~~~~~
  if( runner.isTouching(bomb2) )
    runner.visible = false;

  if( runner.isTouching(bomb2) )
  path.velocityY = 0;

  if( runner.isTouching(bomb2) )
  path.visible = false;

  if( runner.isTouching(bomb2) )
  bomb1.visible = false;

  if( runner.isTouching(bomb2) )
  bomb2.visible = false;

  if( runner.isTouching(bomb2) )
  bomb3.visible = false;
  
  if(runner.isTouching(bomb2)){
  score = score -1;
  gameOver();
  }

  //~~~~~~~~~~~~bomb-3~~~~~~~~~~~~
  if( runner.isTouching(bomb3) )
    runner.visible = false;

  if( runner.isTouching(bomb3) )
  path.velocityY = 0;

  if( runner.isTouching(bomb3) )
  path.visible = false;

  if( runner.isTouching(bomb3) )
  bomb1.visible = false;

  if( runner.isTouching(bomb3) )
  bomb2.visible = false;

  if( runner.isTouching(bomb3) )
  bomb3.visible = false;

  if(runner.isTouching(bomb3)){
    score = score -1;
    gameOver();
  }

}

function gameOver(){
  fill(255,0,0);
  textSize(50)
  text("GameOver!",200,300);

  bomb1.destroy;
  bomb2.destroy;
  bomb3.destroy;
  path.destroy;
  runner.destroy;
}