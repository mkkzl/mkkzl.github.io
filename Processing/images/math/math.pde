PImage image1;
float r;
float g;
float b;
float array;

void setup() {
  fill(#ffffff);
  textSize(18);
  image1=loadImage("IMG_6569.JPG");
  size(1, 1);
  surface.setResizable(true);
  surface.setSize(image1.width, image1.height + 100);
  frameRate(10);
  background(200);
  //size(2320,3088);


  //hint(DISABLE_ASYNC_SAVEFRAME);
}
void draw() {


  array= image1.width*image1.height;
  loadPixels();
  for (int x = 0; x < width; x++) {
    // Loop through every pixel row
    for (int y = 0; y < height; y++) {

      int loc = x+ y*width;
      int new_loc= x+ y*width;

      
      if (key== 'a') {
        new_loc= ((x*x*x)+y * width);
      }
      if (key== 'b') {
        new_loc= (height+width*y);
      }
      if (key== 'c') {
        new_loc= (x+(y*y * width));
      }
      if (key== 'd') {
        new_loc= (height+width*y/(x+y+1));
      }
      if (key== 'e') {
        new_loc= (x*y);
      }
      if (key== 'f') {
        new_loc= ((x*x)/(y+1));
      }
      if (key== 'g') {
        new_loc= (x*y+x*y);
      }
      if (key== 'h') {
        new_loc= (parseInt(sqrt(x))+y*width);
      }
      if (key== 'i') {
        new_loc= (x+ parseInt(sqrt(y))*width);
      }
      if (key== 'j') {
        new_loc= (parseInt(sqrt(x))*height+ parseInt(sqrt(y))*width);
      }
      if (key== 'k') {
        new_loc= (parseInt(log(x*x+1))+y*width);
      }
      if (key== 'l') {
        new_loc= (x*x+parseInt(log(y+1))*width);
      }
      if (key== 'm') {
        new_loc= (x*height + y*width);
      }
      if (key== 'n') {
        new_loc= (x*width + y*height);
      }
      if (key== 'o') {
        new_loc= ((x*x)+y);
      }
      if (key== 'p') {
        new_loc= ((x*x)+y*y);
      }
      if (key== 'q') {
        new_loc= ((x*x*x)+y*y);
      }
      if (key== 'r') {
        new_loc= ((x*x*x)+y*y*y);
      }
      if (key== 's') {
        new_loc= (y*y/(x+1));
      }
      if (key== 't') {
        new_loc= (y*width/(x+1));
      }
      if (key== 'u') {
        new_loc= (x*y/(abs(x-y)+1));
      }
      if (key== 'v') {
        new_loc= (x*y/(x+y+1));
      }
      if (key== 'w') {
        new_loc= (x*y/(abs(x-y)+1)*width);
      }
      if (key== 'x') {
        new_loc= (x*y/(x+y+1)*width);
      }
      if (key== 'y') {
        new_loc= (x*x*y);
      }
      if (key== 'z') {
        new_loc= (width+height*x);
      }
       if(key == '/'){
        new_loc=abs((x^2+y^2-1)^3-x^2*y^3);
      }
     if(key==';'){
       new_loc=parseInt(abs((sin(x)*sqrt(abs(cos(x))))/(sin(x)+(7/5))-2*(sin(x)+2)-y));
     }
     if (key== ',') {
        new_loc= parseInt(abs(x*cos(6*(y))));
      }
      if (key== '.') {
        new_loc= parseInt(abs((x^2)*cos(2*(y))));
      }

      // The functions red(), green(), and blue() pull out the 3 color components from a pixel.
      if (new_loc< array) {
        r = red(image1.pixels[new_loc]);
        g = green(image1.pixels[new_loc]);
        b = blue(image1.pixels[new_loc]);
      } else {
        r= 0;
        g= 0;
        b=0;
      }


      // Set the display pixel to the image pixel
      pixels[loc] =  color(r, g, b);
    }
  }



  updatePixels();

  text("x+y*width", 20, height-20);


  
  if (key== 'a') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x*x)+y * width", 20, height-20);
  }
  if (key== 'b') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("height+width*y", 20, height-20);
  }
  if (key== 'c') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x+(y*y * width)", 20, height-20);
  }
  if (key== 'd') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("height+width*y/(x+y+1)", 20, height-20);
  }
  if (key== 'e') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y", 20, height-20);
  }
  if (key== 'f') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x)/(y+1)", 20, height-20);
  }
  if (key== 'g') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y+ x*y", 20, height-20);
  }
  if (key== 'h') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("parseInt(sqrt(x))+y*width", 20, height-20);
  }
  if (key== 'i') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x+ parseInt(sqrt(y))*width", 20, height-20);
  }
  if (key== 'j') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("parseInt(sqrt(x))*height+ parseInt(sqrt(y))*width", 20, height-20);
  }
  if (key== 'k') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("parseInt(log(x*x+1))+y*width", 20, height-20);
  }
  if (key== 'l') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*x+parseInt(log(y+1))*width", 20, height-20);
  }
  if (key== 'm') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*height + y*width", 20, height-20);
  }
  if (key== 'n') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*width + y*height", 20, height-20);
  }
  if (key== 'o') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x)+y", 20, height-20);
  }
  if (key== 'p') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x)+y*y", 20, height-20);
  }
  if (key== 'q') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x*x)+y*y", 20, height-20);
  }
  if (key== 'r') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("(x*x*x)+y*y*y", 20, height-20);
  }
  if (key== 's') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("y*y/(x+1)", 20, height-20);
  }
  if (key== 't') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("y*width/(x+1)", 20, height-20);
  }
  if (key== 'u') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y/(abs(x-y)+1)", 20, height-20);
  }
  if (key== 'v') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y/(x+y+1)", 20, height-20);
  }
  if (key== 'w') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y/(abs(x-y)+1)*width", 20, height-20);
  }
  if (key== 'x') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*y/(x+y+1)*width", 20, height-20);
  }
  if (key== 'y') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("x*x*y", 20, height-20);
  }
  if (key== 'z') {
    fill(0);
    rect( 0, height-100, width, 100);
    fill(255);
    text("width+height*x", 20, height-20);
  }
  
  

  //noLoop();
  //save("squareddivsquared.jpg");
}
