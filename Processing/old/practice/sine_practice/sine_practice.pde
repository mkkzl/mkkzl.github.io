 
float angle = 0;

void setup() {
  size(640, 360);
}

void draw() {
  


  float d1 = sin(0);
  float d2 = sin(.5);
  float d3 = sin(.25);
  
  line(0, 200, d1, d1);
  line(100, 200, d2, d2);
  line(200, 200, d3, d3);
  
}
