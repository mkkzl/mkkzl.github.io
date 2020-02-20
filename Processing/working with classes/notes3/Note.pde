class Note {
  color [] colorList;
  color c;
  float x;
  float y;
  float w;
  float h;
  float t;

  Note(color cTemp, float xTemp, float yTemp, float wTemp, float hTemp, float tTemp) {
    c=cTemp;
    x=xTemp;
    y=yTemp;
    w= wTemp;
    h=hTemp;
    t=tTemp;
  }

  void display() {    
    noStroke();
    fill(c); //color sticky note
    rect(x, y, w, h); //main body of note
    fill(0); //black for text
    textSize(t);
    text("to do", x+(w/4), y+(h/5));
    stroke(2); //check box has black outline
    fill(c); // check box fill same color as main note
    rect(x+(w/10), y+(h/10), w/10, h/10);
  }
  void make_big() {
    w+= 200;
    h+=200;
    t+=14;
  }
  void make_small() {
    if (w>11) {
      w-=10;
    } else {
      w=10;
    }
    if (h>11) {
      h-=10;
    } else {
      h=10;
    }
    if (t>2) {
      t-=1;
    } else {
      t=1;
    }
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
