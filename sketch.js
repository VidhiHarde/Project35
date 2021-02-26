var balloon,balloonImg;
var balloonImg2,balloonImg3;
var bgImg;
var database;
var position;


function preload(){
bgImg=loadImage("Images/HotAirBallon-01.png");
balloonImg=loadImage("Images/HotAirBallon-02.png");
balloonImg2=loadImage("Images/HotAirBallon-03.png");
balloonImg3=loadImage("Images/HotAirBallon-04.png");
}


function setup() {
  createCanvas(800,600);
  balloon=createSprite(460, 150, 40, 50);
  balloon.addImage("balloonImg",balloonImg);
  balloon.scale=0.5;

  database=firebase.database();

  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readPosition,showError);
}

function draw() {
  background(bgImg);  

if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
 // updateHeight(0,-10);
 balloon.y=balloon.y-10;
//balloon.addImage("balloonImg2",balloonImg2);
//balloon.scale=balloon.scale-0.01;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}
textSize(15);
fill(0);
stroke(2);
text("Use Arrow Keys to move the Hot Air Balloon.",15,30)


  drawSprites();
 
}
function updateHeight(x,y){
database.ref('balloon/height').set({
  'x':height.x+x,
  'y':height.y+y
})
}

function readPosition(){
  position=data.val();
balloon.x=position.x;
balloon.y=position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

