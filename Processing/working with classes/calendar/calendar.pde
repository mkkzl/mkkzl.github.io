color [] colorList= {#3F51B5, #009688, #E67C73, #F6BF26, #655B68, #7986CB, #F4511E, #039BE5};
PFont light;
PFont bold;

void setup() {
  frameRate(3);
  //size(600, 800);
  fullScreen();
  light= createFont("Whitney-Book", 14);
  bold= createFont("Whitney-Bold", 14);
  background(255);
  noStroke();
  for (int i=0; i<height; i+=height/24) {
    fill(#DDDDDD);
    rect(0, i, width, 1);
  }
  
}
void draw() {
  
  
  make_event();
}

void make_event(){
  float x= random(0, 14) *width/14;
  float y= random(0, 24) * (height/24);
  fill(colorList[parseInt(random(colorList.length))]);


  rect(x, y, 150, random(75, 500), 5);

  fill(#ffffff);
  textFont(bold);
  text("to do", x+20, y+25);
  textFont(light);
  text("now-now", x+20, y+45);
}
