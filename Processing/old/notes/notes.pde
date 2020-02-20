Note[] notes;
int count= width*height;
StringList coordinates;
Note myNote;
PImage icon;
PFont light;
PFont bold;
Boolean draw_note= true;

void setup() {
  background(255);
  frameRate(1); //do something every second
  size(600, 800); // screen size
  icon= loadImage("Reminders-icon-sm.png");
  light= createFont("Roboto Light", 14);
  bold= createFont("Roboto Bold", 14);
  background(255);

  coordinates= new StringList ();
  notes = new Note[count];
  for (int index=0; index < count; index++) {
    notes[index] = new Note();
   // background(255);
  }
}

void draw() {
  int note= parseInt(random(0, notes.length));
    if( draw_note){
    notes[note].drawNote();
    }
    if(key == 'r'){ 
      draw_note= false;
      background(255);
      key='p';

    }
    if(!draw_note){
            notes[note].remindNote();
    }
}
