var r = 0;
var g = 55;
var b = 255;

var mouse;

function setup(){
    createCanvas(1200,400);

    mouse  = createSprite(600,200,20,.20);
    mouse.shapeColour = "red";
}

function draw(){
    r = map(mouseX,0,1200,0,255);
    g = map(mouseX,0,1200,0,255);
    b = map(mouseX,0,1200,0,255);

    background(r,g,b);

    ellipse.x = mouseX;
   
    drawSprites();
}