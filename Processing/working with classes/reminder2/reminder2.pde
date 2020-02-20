PImage icon;
PFont light;
PFont bold;
Reminder[] reminders;
int count= width*height;
IntList reminderList;
void setup() {
  reminderList= new IntList();
  reminders= new Reminder[count];
  for (int index=0; index < count; index++) {
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    float w= 250;
    float h= 65;
    float t= 15;
    reminders[index] = new Reminder(x, y, w, h, t);
  }
  size(600, 800);
  icon= loadImage("Reminders-icon-sm.png");
  light= createFont("Roboto Light", 14);
  bold= createFont("Roboto Bold", 14);
  background(255);
  frameRate(10);
}
void draw() {
  int reminder= parseInt(random(reminders.length));
  reminders[reminder].display();
  reminderList.append(reminder);
  
  switch(keyCode) {
    
  case UP:
  background(255);
    for (int i=0; i<reminderList.size(); i++) {
      reminders[reminderList.get(i)].make_big();
      reminders[reminderList.get(i)].display();
    }
    case DOWN:
    background(255);
    for (int i=0; i<reminderList.size(); i++) {
      reminders[reminderList.get(i)].make_small();
      reminders[reminderList.get(i)].display();
    }
    case RIGHT:
    background(255);
    for (int i=0; i<reminderList.size(); i++) {
      reminders[reminderList.get(i)].move();
      reminders[reminderList.get(i)].display();
    }
    case LEFT:
    background(255);
    for (int i=0; i<reminderList.size(); i++) {
      reminders[reminderList.get(i)].move();
      reminders[reminderList.get(i)].display();
    }
  }
}
