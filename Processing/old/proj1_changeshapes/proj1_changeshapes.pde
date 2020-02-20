// variables for rgb values, number of shapes
int r=0;
int g= 0;
int b=0;
int n= 50;

void setup() {
  //size(500, 500);
  fullScreen();
  background(0);
  frameRate(2);
  noStroke();
}
void draw() {
  // create array of luminance values
  int[] vals = new int[255];
  for (int i=0; i<vals.length; i++) {
    vals[i]=i;
  }  
  
  // reset screen
  background(0);
  
  //iterate through screen according to number of shapes
  //random number for each square space to correlate to particular shape
  for (int y=0; y<500; y+=n) {
    for (int x=0; x<500; x+=n) {
      float num = random(1, 40);
      int al= vals[parseInt(random(0, 255))];
      if (num <10) {
        fill(180+r, 240+g, 140+b, al);
        rect((n/5)+x, (n/5)+y, (n/5)*3, (n/5)*3);
      }
      if (num>= 10 && num < 20) {
        fill(140+r, 180+g, 240+b, al);
        circle((n/2)+x, (n/2)+y, (n/5)*3);
      }
      if (num>= 20 && num <30) {
        fill(240+r, 140+g, 180+b, al);
        rect((n/2) -(n/20)+x, (n/5)+y, n/10, (n/5)*3);
      }
    }
  }


  //adjust number of shapes based on mouseY position
  if (mouseY < height/6) {
    n= 25;
  }
  if (mouseY > height/6 && mouseY < (height/6) *2) {
    n= 50;
  }
  if (mouseY > (height/6) *2 && mouseY < (height/6) *3) {
    n= 100;
  }
  if (mouseY > (height/6) *3 && mouseY < (height/6) *4) {
    n= 125;
  }
  if (mouseY > (height/6) *4 && mouseY < (height/6) *5) {
    n= 250;
  }
  if (mouseY > (height/6) *5) {
    n= 500;
  }
}

void mousePressed() {
  //noLoop();
  frameRate(.5);
}

void mouseReleased() {
  //loop();
  frameRate(2);
}

void keyPressed() {
  //change rgb values for each alphabetic key
  //switch case
  if (key== 'a') {
    r=100;
    g=-100;
    b=100;
  }
  if (key== 'b') {
    r=-100;
    g=-100;
    b=100;
  }
  if (key== 'c') {
    r=-100;
    g=100;
    b=100;
  }
  if (key== 'd') {
    r=80;
    g=-40;
    b=60;
  }
  if (key== 'e') {
    r=60;
    g=80;
    b=-20;
  }
  if (key== 'f') {
    r=100;
    g=100;
    b=-100;
  }
  if (key== 'g') {
    r=-100;
    g=100;
    b=-100;
  }
  if (key== 'h') {
    r=-80;
    g=60;
    b=-40;
  }
  if (key== 'i') {
    r=-60;
    g=20;
    b=40;
  }
  if (key== 'j') {
    r=-20;
    g=80;
    b=-60;
  }
  if (key== 'k') {
    r=-20;
    g=-80;
    b=-40;
  }
  if (key== 'l') {
    r=80;
    g=60;
    b=20;
  }
  if (key== 'm') {
    r=40;
    g=-40;
    b=-80;
  }
  if (key== 'n') {
    r=-80;
    g=40;
    b=80;
  }
  if (key== 'o') {
    r=20;
    g=-60;
    b=60;
  }
  if (key== 'p') {
    r=-40;
    g=20;
    b=-60;
  }
  if (key== 'q') {
    r=100;
    g=100;
    b=-100;
  }
  if (key== 'r') {
    r=100;
    g=-100;
    b=-100;
  }
  if (key== 's') {
    r=60;
    g=40;
    b=40;
  }
  if (key== 't') {
    r=-60;
    g=-60;
    b=20;
  }
  if (key== 'u') {
    r=40;
    g=-20;
    b=-20;
  }
  if (key== 'v') {
    r=-40;
    g=-80;
    b=-80;
  }
  if (key== 'w') {
    r=20;
    g=-20;
    b=-80;
  }
  if (key== 'x') {
    r=-50;
    g=50;
    b=-50;
  }
  if (key== 'y') {
    r=50;
    g=-50;
    b=-50;
  }
  if (key== 'z') {
    r=-50;
    g=-50;
    b=50;
  }
}
