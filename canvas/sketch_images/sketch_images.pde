


/*void setup(){
   size(1000,750,P3D);
  background(loadImage("Vision2019.jpg"));
  PImage img= loadImage("Vision2019C.jpg");
  image(img, 0,0);
blend(img, 0,0, 1000, 750, 0, 0, 1000, 750, BURN);
noLoop();
}*/


PImage image1;
PImage image2;
PImage destination;

void setup(){
  image1= loadImage("Vision2019.jpg");
  image2=loadImage("Vision2019C.jpg");
  size(1,1,P3D);
  surface.setResizable(true);
  surface.setSize(image1.width, image1.height);
  image(image1, 0, 0, width, height);
   noLoop();
   //hint(DISABLE_ASYNC_SAVEFRAME);
  
}

void draw(){
  background(255);
  
  int sx= 0;
  int sy= 0;
  int dx= 0;
  int dy= 0;
  int w= image1.width/ 25;
  int h= image1.height/ 25;
  int which= int(random(1,7));
  while (dy < image1.height){
      while (dx < image1.width){
        if (which%2 ==0){
          copy(image1, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
       
          dx= dx+w;
         
        which= int(random(1,7));
      } else{
            copy(image2, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
         
          dx= dx+w;
          
          which= int(random(1,7));
          }
        }
        sy = sy+h;
        dy= dy +h;
        dx= 0;
        sx= 0;
  
 }
 
 
 
}
 void mousePressed(){
 redraw();
 saveFrame();
 
 
 }



  
  /*image1.loadPixels();
  image2.loadPixels();
  for (int i=0; i < image1.width; i++){
    for (int j = 0; j < image1.height; j ++){
      int loc = i+j*image1.width;
      color c = image1.pixels[loc];
      color c2= image2.pixels[loc];
      int roll = int(random(1, 7));
      if ( j< 10){
      if (roll == 1 || roll == 2 || roll ==3){
        print (roll);
        print ("loc");
        print (loc);
        print ("c");
        print (c);
        destination.pixels[loc] = c;
        
  }
       if (roll == 4 || roll == 5 || roll ==6){
         print (roll);
        print ("loc");
        print (loc);
        print ("c2");
        print (c2);
          destination.pixels[loc]=c2;
          }
    }
    
  }*/
  
 // destination.updatePixels();
 // image(destination, 0,0);
        
  
