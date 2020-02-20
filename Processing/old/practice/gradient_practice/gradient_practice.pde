// Constants
int Y_AXIS = 1;
int X_AXIS = 2;
color b1, b2, c1, c2;

void setup() {
  size(640, 360);

  // Define colors
  c1 = color(#ffff66);
  c2 = color(#1ca363);

  noLoop();
  setGradient();
  fill(c);
  stroke(c);
  circle(x, y, 30);
}



void setGradient(int x, int y, float w, float h, color c1, color c2, int axis ) {

 

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (int i = y; i <= y+h; i++) {
      float inter = map(i, y, y+h, 0, 1);
      color c = lerpColor(c1, c2, inter);
      return(c);
    }
  }  
  /*else if (axis == X_AXIS) {  // Left to right gradient
    for (int i = x; i <= x+w; i++) {
      float inter = map(i, x, x+w, 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }*/

}
