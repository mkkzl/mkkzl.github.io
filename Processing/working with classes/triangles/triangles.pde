Triangle [] triangles;
Rectangle [] rectangles;
Circle [] circles;
int count= width*height;
IntList triList;
IntList rectList;
IntList cirList;


void setup() {
  background(255);
  frameRate(3); //do something every second
  size(600, 800); // screen size

  triList = new IntList();
  rectList= new IntList();
  cirList= new IntList();
  triangles = new Triangle[count];
  rectangles= new Rectangle[count];
  circles= new Circle[count];
  for (int index=0; index < count; index++) {
    int r=parseInt(random(255));
    int g=parseInt(random(255));
    int b=parseInt(random(255));
    int a=30;
    float x1= random(0, width); //generate random x and y w/in screen limits
    float y1=random(0, height);
    float x2= random(0, width); 
    float y2=random(0, height);
    float x3= random(0, width); 
    float y3=random(0, height);
    triangles[index] = new Triangle(x1, y1, x2, y2, x3, y3, r,g,b,a);
    r=parseInt(random(255));
    g=parseInt(random(255));
    b=parseInt(random(255));
    a=30;
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    float w= random(0, width); 
    float h=random(0, height);
    rectangles[index]= new Rectangle(x, y, w, h, r,g,b,a);
    r=parseInt(random(255));
    g=parseInt(random(255));
    b=parseInt(random(255));
    a=30;
    x= random(0, width); //generate random x and y w/in screen limits
    y=random(0, height);
    w= random(0, width); 
    h=random(0, height);
    circles[index]= new Circle(x, y, w, h, r,g,b,a);
  }
}

void draw() {
   if(mouseX<width/3){
  int triangle= parseInt(random(0, triangles.length));
  triangles[triangle].display();
  triList.append(triangle);
   }

  if(mouseX>width/3 && mouseX<width/3 *2){
    int circle= parseInt(random(0, circles.length));
    circles[circle].display();
    cirList.append(circle);
  }
 if(mouseX>width/3*2){
    int rectangle= parseInt(random(0, rectangles.length));
    rectangles[rectangle].display();
    rectList.append(rectangle);
 }
  }
