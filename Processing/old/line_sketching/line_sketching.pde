int timer;
float x_anchor_1= mouseX;
float x_control_1=random((x_anchor_1)-15, (x_anchor_1)+15);
float x_control_2=random((x_anchor_1)-25, (x_anchor_1)+25);
float x_anchor_2=random((x_anchor_1)-10, (x_anchor_1)+10);

float y_anchor_1=mouseY;
float y_control_1=random((y_anchor_1)-15, (y_anchor_1)+15);
float y_control_2= x_control_2;
float y_anchor_2=random((y_anchor_1)-(y_anchor_1*2), (y_anchor_1)+(y_anchor_1*2));

void setup() {
  size(600, 800);
  background(#000000);
  frameRate(10);
}
void draw() {

  /*if (millis() - timer >= 1000) {
   background(#8E3D3B);
   timer = millis();
   }*/

  stroke(230, 127); // grey and semi-transparent
  strokeWeight(1);
  noFill();




  bezier(x_anchor_1, x_control_1, x_control_2, x_anchor_2, y_anchor_1, y_control_1, y_control_2, y_anchor_2);
}

void lines() {
  switch (x_anchor_1) {
  }
  float x_control_1=random((x_anchor_1)-15, (x_anchor_1)+15);
  float x_control_2=random((x_anchor_1)-25, (x_anchor_1)+25);
  float x_anchor_2=random((x_anchor_1)-10, (x_anchor_1)+10);

  float y_anchor_1=mouseY;
  float y_control_1=random((y_anchor_1)-15, (y_anchor_1)+15);
  float y_control_2= x_control_2;
  float y_anchor_2=random((y_anchor_1)-(y_anchor_1*2), (y_anchor_1)+(y_anchor_1*2));
}
