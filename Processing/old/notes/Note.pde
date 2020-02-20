class Note{
  Note(){  
  
  }
  void drawNote(){
    color[] colorList= {color(#EDEA97), color(#ED97E2), color(#9EED97), color(#97E1ED)};
    color c= colorList[parseInt(random(colorList.length))];
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    
    noStroke();
    fill(c); //color sticky note
    rect(x, y, 100, 100); //main body of note
    fill(0); //black for text
    textSize(14);
    text("to do", x+25, y+20);
    stroke(2); //check box has black outline
    fill(c); // check box fill same color as main note
    rect(x+10, y+10, 10, 10);

    //coordinates.append(x);
    //coordinates.append(y);
}

void remindNote(){
  float x= random(0, width); //generate random x and y w/in screen limits
  float y=random(0, height);
  fill(#EDEDED);
  noStroke();
  rect(x, y, 250, 65, 5);
  image(icon, x+10, y+10);
  fill(#BBBBBB);
  textFont(light);
  text("REMINDER", x+35, y+25);
  fill(0);
  textFont(bold);
  text("to do", x+10, y+50);
}
}
