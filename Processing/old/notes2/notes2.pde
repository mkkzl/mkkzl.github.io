Note[] notes; // array of objects
int count= width*height; // number of possible places for notes
FloatList x_coordinates;
FloatList y_coordinates;

void setup() {
  background(255);
  frameRate(1); //do something every second
  size(600, 800); // screen size
  x_coordinates= new FloatList ();
  y_coordinates= new FloatList ();
  notes = new Note[count];
  for (int index=0; index < count; index++) {
    color[] colorList= {color(#EDEA97), color(#ED97E2), color(#9EED97), color(#97E1ED)};
    color c= colorList[parseInt(random(colorList.length))]; //select random color
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    notes[index] = new Note(c, x, y);
    x_coordinates.set(index, x);
    y_coordinates.set(index, y);
  }
}

void draw() {
  int note= parseInt(random(0, notes.length));
  notes[note].display();
  
  for (int x_val=0; x_val<x_coordinates.size(); x_val++){
    if(mouseX== x_coordinates.get(x_val)){
      if(mouseY==y_coordinates.get(x_val)){
        notes[x_val].hide();
        println("true");
      }
    }
  }
}
  
