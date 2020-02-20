char letter;
int x=20;
int y=20;
int w=5;
int h=5;
int d=5;


void setup(){
  size(500,300);
  background(0);
  ellipseMode(CORNER);
}
void draw(){
  fill(255);
  String string = "check these characters";
  for(char let : string.toCharArray()){
    letter= let;
    check_cons(letter);
    x+=10;
  
  }
  noLoop();


}

void check_cons(char letter){
  if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    fill(255);
    rect(x, y, w, h);
  }
  else{
    fill(255);
    ellipse(x, y, w,h);
  }
}
