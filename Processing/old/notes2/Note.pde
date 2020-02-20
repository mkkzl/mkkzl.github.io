class Note{
    color [] colorList;
    color c;
    float x;
    float y;
    Boolean draw_note= true;
  
  Note(color cTemp, float xTemp, float yTemp){
     c=cTemp;
     x=xTemp;
     y=yTemp;
  }

  void display(){    
    noStroke();
    fill(c); //color sticky note
    rect(x, y, 100, 100); //main body of note
    fill(0); //black for text
    textSize(14);
    text("to do", x+25, y+20);
    stroke(2); //check box has black outline
    fill(c); // check box fill same color as main note
    rect(x+10, y+10, 10, 10);
}
  void hide(){
    noStroke();
    rect(x, y, 0,0); //main body of note
    textSize(0);
    stroke(0); //check box has black outline
    rect(x+10, y+10, 0, 0);
  }
}
