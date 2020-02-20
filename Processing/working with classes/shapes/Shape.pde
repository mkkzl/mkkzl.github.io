class Shape {
  float x1;
  float y1;
  float x2;
  float y2;
  float x3;
  float y3;
  float x4;
  float y4;
  float x5;
  float y5;
  PImage image;
 



  Shape(float x1Temp, float y1Temp, float x2Temp, float y2Temp, float x3Temp, float y3Temp,float x4Temp, float y4Temp, float x5Temp, float y5Temp, PImage imageTemp) {
    x1= x1Temp;
    y1= y1Temp;
    x2= x2Temp;
    y2= y2Temp; 
    x3= x3Temp;
    y3= y3Temp; 
    x4= x4Temp;
    y4= y4Temp;
    x5=x5Temp;
    y5=y5Temp;
    image=imageTemp;
  }

  void display() { 
    noStroke();

    beginShape();
    texture(image);
    vertex(x1, y1, 0, 0);
    vertex(x2, y2, image.width, 0);
    vertex(x3, y3, image.width, image.height);
    vertex(x4, y4, image.width, image.height);
    vertex(x5, y5, 0, image.height);
    endShape(CLOSE);
  }
}
