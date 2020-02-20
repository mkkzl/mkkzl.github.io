class Triangle {
  float x1;
  float y1;
  float x2;
  float y2;
  float x3;
  float y3;
  int r;
  int g;
  int b;
  int a;



  Triangle(float x1Temp, float y1Temp, float x2Temp, float y2Temp, float x3Temp, float y3Temp, int rTemp, int gTemp, int bTemp, int aTemp) {
    x1= x1Temp;
    y1= y1Temp;
    x2= x2Temp;
    y2= y2Temp;
    x3= x3Temp;
    y3= y3Temp;
     r=rTemp;
    g=gTemp;
    b= bTemp;
    a=aTemp;
  }

  void display() {    
    
    stroke(2); 
    fill(r,g,b,a); 
    triangle(x1, y1, x2, y2, x3, y3);
  }
  void vivid(){
    a+=1;
  }
}
