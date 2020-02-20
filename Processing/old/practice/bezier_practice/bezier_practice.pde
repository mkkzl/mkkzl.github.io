void setup(){
size(200, 200);
background(255);
beginShape();
vertex(30, 70); // first point
bezierVertex(25, 25, 100, 50, 50, 100);
bezierVertex(22, 50, 80, 80, 80, 100);
bezierVertex(20, 130, 75, 140, 120, 120);
endShape();

}
