var fixedRect, movingRect
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "Green";
  fixedRect.velocityX = 5;
  fixedRect.velocityY = 5;


  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "Green";
  movingRect.velocityX = -5;
  movingRect.velocitY = -5;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "Green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "Green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "Green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "Green";
}

function draw() {
  background( "Black");
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if (isTouching(movingRect, gameObject2)) {
    gameObject2.shapeColor = "Red";
    movingRect.shapeColor = "Red";
  }
  else {
    gameObject2.shapeColor = "Yellow";
    movingRect.shapeColor = "Yellow";
  }

  bounceOff(movingRect, fixedRect);
  drawSprites();
  
}

