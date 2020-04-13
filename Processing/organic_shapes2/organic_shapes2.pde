PImage [] images= new PImage [10];
int num=0;


//look up texture with bezier curves
//alter bezier?
//openframeworks-pc?

void setup() {
  background(255);
  size(600, 800, P2D);
  noStroke();
  
  images[0]= loadImage("reas0.jpg");
  images[1]= loadImage("reas1.jpg");
  images[2]= loadImage("reas2.jpg");
  images[3]= loadImage("reas3.jpg");
  images[4]= loadImage("reas4.jpg");
  images[5]= loadImage("reas5.jpg");
  images[6]= loadImage("reas6.jpg");
  images[7]= loadImage("reas7.jpg");
  images[8]= loadImage("reas8.jpg");
  images[9]= loadImage("reas9.jpg");
}
void draw() {

 // texture(images[6]);

 // rect(0, 0, width, height, 0, 0);

  fill(150);
  bot_left_shape();


  fill(40);

  top_shape();

  fill(200);
  mid_bot_shape();

  fill(80);
  bottom_shape();

  fill(125);
  top_right_shape();
}

void top_shape() {
  beginShape();
  texture(images[0]);
  //texture(image);
  vertex(width/3, 0, 0, 0); // first point
  bezierVertex(width/3, height/12, width/3, height/4, width/4, height/4 );
  bezierVertex(width/15, height/8, width/12, height/7, 0, height/5*2);
  vertex(0, 0, images[0].width, images[0].height);
  endShape(CLOSE);
}

void bottom_shape() {
  beginShape();
  texture(images[1]);
  vertex(width/3*2, height, 0, 0); // first point
  bezierVertex(width/3*2, height/12*10, width/3*2, height/8*7, width/2, height/7*5);
  bezierVertex(width/13*9, height/8*7, width/12*11, height/5*3, width, height/5*2);
  vertex(width, height, images[1].width, images[1].height);
  endShape(CLOSE);
}

void mid_bot_shape() {
  beginShape();
  texture(images[2]);
  vertex(width/6, height, 0, 0); // first point
  bezierVertex(width/7*2, height/12*7, width/3*2, height/8*3, width/3*2, height/8*5);
  bezierVertex(width/13*9, height/8*7, width/12*11, height/5*3, width, height/7*5);
  vertex(width, height, images[2].width, images[2].height);
  endShape(CLOSE);
}

void bot_left_shape() {
  beginShape();
  texture(images[3]);
  vertex(0, height/3, 0, 0); // first point
  bezierVertex(width/7*2, height/12*7, width/3*2, height/8*3, width/2, height/2);
  bezierVertex(width/12*10, height/8*7, width/12*11, height/5*4, width, height);
  vertex(0, height, images[3].width, images[3].height);
  endShape(CLOSE);
}

void top_right_shape() {
  beginShape();
  texture(images[4]);
  vertex(width/3, 0, 0, 0); // first point
  bezierVertex(width/3, height/12, width/3, height/4, width/5*2, height/4);
  bezierVertex(width/15*13, height/8*3, width/12*7, height/7*3, width, height/5*2);
  vertex(width, 0, images[4].width, images[4].height);
  endShape(CLOSE);
}
