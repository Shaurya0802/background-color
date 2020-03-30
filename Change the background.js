var r = 0;
var g = 189;
var b = 255;

var mouse;

function setup(){
    createCanvas(600,400);
}

function draw(){                                                                              
    r = map(mouseX,0,600,0,255);
    g = map(mouseX,0,600,255,0);
    b = map(mouseX,0,600,0,255);
  
    background(r,g,b);
  
    fill(0,0,128);
    ellipse(mouseX,200,64,64);
   
    drawSprites();
}