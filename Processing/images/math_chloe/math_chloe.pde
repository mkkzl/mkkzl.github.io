PImage image1;
float r;
float g;
float b;
float array;


void setup() {
  fill(#ffffff);
  textSize(18);
  image1=loadImage("Chloe_sm.jpg");
  size(1, 1);
  surface.setResizable(true);
  surface.setSize(image1.width, image1.height);
  frameRate(1);
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
        new_loc= (abs(5+x-y));
      }
      if (key== 'b') {
        new_loc= (abs(5-(3*x)-y));
      }
      if (key== 'c') {
        new_loc= abs(-6*(x-3)^2+4-y);
      }
      if (key== 'd') {
        new_loc= abs(-5*x+y+2);
      }
      if (key== 'e') {
        new_loc= abs(-3*x+6*y+12);
      }
      if (key== 'f') {
        new_loc= abs(x+3*y-1);
      }
      if (key== 'g') {
        new_loc= abs(-3*x-3*y+15);
      }
      if (key== 'h') {
        new_loc= abs(-3*x+3*y-4);
      }
      if (key== 'i') {
        new_loc= abs(-x+y-3);
      }
      if (key== 'j') {
        new_loc= abs(2*x+8*y-6);
      }
      if (key== 'k') {
        new_loc= abs(-5*x-20*y+15);
      }
      if (key== 'l') {
        new_loc= abs(2*x^3-y);
      }
      if (key== 'm') {
        new_loc= abs(-2*x^2-1-y);
      }
      if (key== 'n') {
        new_loc= abs(-(1/5)*x-y);
      }
      if (key== 'o') {
        new_loc= abs(-2*(x+2)^2+4-y);
      }
      if (key== 'p') {
        new_loc= abs(x^2+4*x+1-y);
      }
      if (key== 'q') {
        new_loc= abs(x^2-4-y);
      }
      if (key== 'r') {
        new_loc= abs((-1/3)*x^2+1+y);
      }
      if (key== 's') {
        new_loc= abs((x-2)^2-y);
      }
      if (key== 't') {
        new_loc= abs(-3*(x-1)^2+12-y);
      }
      if (key== 'u') {
        new_loc= abs(-5*x*y*(-5*x^-3*y));
      }
      if (key== 'v') {
        new_loc= abs((-4*x^2*y^8)^2);
      }
      if (key== 'w') {
        new_loc= abs((-4*x^2*y^2)/((8*x^-2*y^-2)+1));
      }
      if (key== 'x') {
        new_loc= abs(8*y-13*x-(x+2*y));
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
  save("chloe"+key+".jpg");



  

}
