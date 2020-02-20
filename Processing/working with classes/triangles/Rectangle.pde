class Rectangle {
  float x;
  float y;
  float w;
  float h;
  int r;
  int g;
  int b;
  int a;



  Rectangle(float xTemp, float yTemp, float wTemp, float hTemp, int rTemp, int gTemp, int bTemp, int aTemp) {
    x= xTemp;
    y= yTemp;
    w= wTemp;
    h= hTemp;
     r=rTemp;
    g=gTemp;
    b= bTemp;
    a=aTemp;
  }

  void display() {    
    
    stroke(2); 
    fill(r,g,b,a); 
    rect(x,y,w,h);
  }
  void vivid(){
    a+=1;
  }
}
