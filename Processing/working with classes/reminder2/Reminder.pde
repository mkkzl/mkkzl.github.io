class Reminder {
  float x;
  float y;
  float w;
  float h;
  float t;
  Reminder(float xTemp, float yTemp, float wTemp, float hTemp, float tTemp) {
    x= xTemp;
    y=yTemp;
    w=wTemp;
    h=hTemp;
    t=tTemp;
  }
  
  void display(){
  fill(#F0F0F0);
  noStroke();
  
  rect(x, y, w, h, 5);
  image(icon, x+10, y+10);
  fill(#C6C6C6);
  textSize(t);
  textFont(light);
  text("REMINDER", x+35, y+25);
  fill(0);
  textFont(bold);
  text("to do", x+10, y+50);
  }
  void make_big() {
    w+= 50;
    h+=13;
    t+=3;
  }
  void make_small() {
    if (w>11) {
      w-=25;
    } else {
      w=10;
    }
    if (h>11) {
      h-=6.5;
    } else {
      h=10;
    }
    if (t>2) {
      t-=1.5;
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
