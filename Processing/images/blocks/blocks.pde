PImage image;

void setup(){
  
  image=loadImage("IMG_5240.jpg");
   size(1,1,P3D);
  surface.setResizable(true);
  surface.setSize(image.width, image.height);
  //size(2320,3088);
  
}

void draw(){
  image(image, 0, 0, width, height);
  float num= random(15);
  int rectnum= int(num);
  //console.log(rectnum)
  while (rectnum > 0){
    int x= int(random(image.width));
    int y= int(random(image.height));
    int w= int(random(image.width-x)) ;
    int h= int(random(image.height-y));
    //console.log(x,y,w,h)
    fill(#000000);
    rectnum= rectnum-1;
    rect(x,y,w,h);
  }
  noLoop();
}
 void mousePressed(){
 redraw();}
