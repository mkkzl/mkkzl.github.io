Note[] notes; // array of objects
int count= width*height; // number of possible places for notes
IntList noteList;

//opacity??? to hide???

void setup() {
  background(255);
  frameRate(3); //do something every second
  size(600, 800); // screen size

  noteList = new IntList();
  notes = new Note[count];
  for (int index=0; index < count; index++) {
    color[] colorList= {color(#EDEA97), color(#ED97E2), color(#9EED97), color(#97E1ED)};
    color c= colorList[parseInt(random(colorList.length))]; //select random color
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    float w= 100;
    float h=100;
    float t=14;
    notes[index] = new Note(c, x, y, w, h, t);
  }
}

void draw() {
  int note= parseInt(random(0, notes.length));
  notes[note].display();
  noteList.append(note);

  switch(keyCode) {
    
  case UP:
  background(255);
    for (int i=0; i<noteList.size(); i++) {
      notes[noteList.get(i)].make_big();
      notes[noteList.get(i)].display();
    }
    case DOWN:
    background(255);
    for (int i=0; i<noteList.size(); i++) {
      notes[noteList.get(i)].make_small();
      notes[noteList.get(i)].display();
    }
    case RIGHT:
    background(255);
    for (int i=0; i<noteList.size(); i++) {
      notes[noteList.get(i)].move();
      notes[noteList.get(i)].display();
    }
    case LEFT:
    background(255);
    for (int i=0; i<noteList.size(); i++) {
      notes[noteList.get(i)].move();
      notes[noteList.get(i)].display();
    }
  }
}
