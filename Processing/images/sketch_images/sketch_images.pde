PImage image1;
PImage image2;
PImage image3;
PImage image4;
PImage image5;
PImage image6;


void setup(){
  //image1= loadImage("Vision2019.jpg");
  //image2=loadImage("Vision2019C.jpg");
  image1=loadImage("IMG_6569.JPG");
  image2=loadImage("IMG_6570.JPG");
  image3=loadImage("IMG_6571.JPG");
  image4=loadImage("IMG_6572.JPG");
  image5=loadImage("IMG_6573.JPG");
  image6=loadImage("IMG_6574.JPG");
 
  size(1,1,P3D);
  surface.setResizable(true);
  surface.setSize(image1.width, image1.height);
  //size(2320,3088);
  image(image1, 0, 0, width, height);
  image(image2, 0, 0);
  image(image3, 0, 0);
  image(image4, 0, 0);
  image(image5, 0, 0);
  image(image6, 0, 0);
   noLoop();
   //hint(DISABLE_ASYNC_SAVEFRAME);
  
}

void draw(){
  background(255);
  
  int sx= 0;
  int sy= 0;
  int dx= 0;
  int dy= 0;
  int w= image1.width/ image1.width;
  int h= image1.height/ image1.height;
  int which= int(random(1,7));
  while (dy < image1.height){
      while (dx < image1.width){
        if (which ==1){
          copy(image1, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
       
          dx= dx+w;
         
        which= int(random(1,7));
      } else if (which ==2){
            copy(image2, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
         
          dx= dx+w;
          
          which= int(random(1,7));
          }
          else if (which ==3){
            copy(image3, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
         
          dx= dx+w;
          
          which= int(random(1,7));
          }else if (which ==4){
            copy(image4, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
         
          dx= dx+w;
          
          which= int(random(1,7));
          } else if (which ==5){
            copy(image5, sx,sy,w,h, dx,dy, w,h);
          sx= sx+w;
         
          dx= dx+w;
          
          which= int(random(1,7));
          }else if (which ==6){
            copy(image6, sx,sy,w,h, dx,dy, w,h);
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
 
 noLoop();
 save("single_pixel.jpg");
 
}
 void mousePressed(){
 redraw();
  int n= 0;
 save("image"+n+".jpg");
 n= n+1;
 
 
 }
