var bananaImage,obstacleImage,obstacleGroup,bg,score;

function preload() {
  player_running = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  
  bananaImage = loadImage("banana.png");
  stone_img = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400, 400);
  bg = createSprite(200,200,400,400);  
  bananaImage = createSprite(200,200,20,20);
}

function draw() {
  background(220);
  drawSprites();
}