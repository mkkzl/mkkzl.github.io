StringList shakespeare;
int timer;


void setup() {
  size(600, 800); //make screen 600 by 800 px
  shakespeare = new StringList();
  addLines();
  frameRate(5);
  background(0);
}
void draw() {
  writetoScreen();
  
  if (millis() - timer >= 10000) {
    background(0);
    timer = millis();
  }
}
void writetoScreen(){
  keyPressed();
  int line_number= parseInt(random(0, shakespeare.size()));
  float x= random(0, width);
  float y= random(0, height);
  float org_x= x;

  String shake_line= shakespeare.get(line_number);
  for (char letter : shake_line.toCharArray())
  {
    traslationsText();
    text(letter, x, y);
    if (x<width-20) {
      x+=10;
    } else {
      x= org_x;
      y+=15;
    }
  }
  
}
void addLines() {
  shakespeare. append("All that glitters is not gold");
  shakespeare. append("Fair is foul, and foul is fair: Hover through the fog and filthy air.");
  shakespeare. append("Life ... is a tale Told by an idiot, full of sound and fury, Signifying nothing.");
  shakespeare. append("These violent delights have violent ends...");
  shakespeare. append("By the pricking of my thumbs, Something wicked this way comes. Open, locks, Whoever knocks!");
  shakespeare. append("The lady doth protest too much, methinks.");
  shakespeare. append("Brevity is the soul of wit.");
  shakespeare. append("Now is the winter of our discontent.");
  shakespeare. append("Good night, good night! parting is such sweet sorrow, That I shall say good night till it be morrow.");
  shakespeare. append("If music be the food of love, play on.");
}

void traslationsText(){
  if(key== 'r'){
    translate(width/2, height/2);
    rotate(PI/3.0);
  }
  if(key== 's'){
    scale(1.5);
  }
}
void keyPressed(){
  if(key== 'r'){
    background(#C43535);
  }
  if(key== 's'){
    background(#091364);
  }
}
