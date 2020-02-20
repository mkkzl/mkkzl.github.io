class Event {
  float x;
  float y;
  color[] colorList;
  color c;

  Event(float xTemp, float yTemp, color cTemp) {
    x=xTemp;
    y=yTemp;
    c=cTemp;
  }

  void display() {
    fill(c);

    rect(x, y, 150, random(75, 500), 5);

    fill(#ffffff);
    textFont(bold);
    text("to do", x+20, y+25);
    textFont(light);
    text("now-now", x+20, y+45);
  }

  void move() {
    if (x<width-x || x<=0) {
      x+=random(width-x);
    } else {
      x-=random(width-x);
    }
    if (y<height-y|| y<=0) {
      y+=random(height-y);
    } else {
      y-=random(height-y);
    }
  }
}
