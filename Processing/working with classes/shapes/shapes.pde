PImage [] images= new PImage [10];
int num=0;

void setup() {
  background(255);
  frameRate(1); //do something every second
  size(600, 800, P2D); // screen size
  images[0]= loadImage("reas0.jpg");
  images[1]= loadImage("reas1.jpg");
  images[2]= loadImage("reas2.jpg");
  images[3]= loadImage("reas3.jpg");
  images[4]= loadImage("reas4.jpg");
  images[5]= loadImage("reas5.jpg");
  images[6]= loadImage("reas6.jpg");
  images[7]= loadImage("reas7.jpg");
  images[8]= loadImage("reas8.jpg");
  images[9]= loadImage("reas9.jpg");
}


void draw() {

  if (mouseX< width/3) {
    num= parseInt(random(5, 20));
  }
  if (mouseX> width/3*2) {
    num= parseInt(random(35, 50));
  }
  if (mouseX> width/3 && mouseX< width/3*2) {
    num= parseInt(random(20, 35));
  }
  println(num);
  background(255);
  for (int i=0; i < num; i++) {
    float x1=random(width);
    float y1=random(height);
    float x2=random(width);
    float y2=random(height);
    float x3=random(width);
    float y3=random(height);
    float x4=random(width);
    float y4=random(height);
    float x5=random(width);
    float y5=random(height);
    PImage image= images[parseInt(random(0, images.length))];

    Shape shape= new Shape(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, image);
    shape.display();
  }
}
