PImage icon;
PFont light;
PFont bold;

void setup(){
size(600, 800);
icon= loadImage("Reminders-icon-sm.png");
light= createFont("Roboto Light", 14);
bold= createFont("Roboto Bold", 14);
background(255);
}
void draw(){
float x= width/2;
  float y=height/2;
  fill(#EDEDED);
  noStroke();
  
  rect(x, y, 250, 65, 5);
  image(icon, x+10, y+10);
  fill(#BBBBBB);
  textFont(light);
  text("REMINDER", x+35, y+25);
  fill(0);
  textFont(bold);
  text("to do", x+10, y+50);
  
  noLoop();
  
}

/*
random(0, width); //generate random x and y w/in screen limits
random(0, height);
*/
