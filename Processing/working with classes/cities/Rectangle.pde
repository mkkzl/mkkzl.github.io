class Rectangle {
  float x;
  float y;
  float w;
  float h;
  int r;
  int g;
  int b;
  int n;



  Rectangle(float xTemp, float yTemp, float wTemp, float hTemp, int rTemp, int gTemp, int bTemp, int nTemp) {
    x= xTemp;
    y= yTemp;
    w= wTemp;
    h= hTemp;
    r=rTemp;
    g=gTemp;
    b= bTemp;
    n=nTemp;
  }

  void display() {    

    stroke(2); 
    fill(r, g, b); 
    rect(x, y, w, h);
  }

  void update() {
    n= parseInt(random(75, 100));
    x= random(0, width); //generate random x and y w/in screen limits
    y=random(0, height);
    w= random(0, width/n); 
    h=random(0, height/n);
  }
}
