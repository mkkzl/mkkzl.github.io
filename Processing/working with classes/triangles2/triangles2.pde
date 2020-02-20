Rectangle [] rectangles;
int count= (width*height)/6;
IntList rectList;



void setup() {
  background(255);
  frameRate(1); //do something every second
  size(600, 800); // screen size

  rectList= new IntList();

  rectangles= new Rectangle[count];

  for (int index=0; index < count; index++) {
    int n=12;
    int r=parseInt(random(255));
    int g=parseInt(random(255));
    int b=parseInt(random(255));
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    float w= random(0, width/n); 
    float h=random(0, height/n);
    rectangles[index]= new Rectangle(x, y, w, h, r, g, b, n);
  }
}

void draw() {
  background(255);
  for (Rectangle rect : rectangles) {
    rect.update();
    rect.display();
  }
}
