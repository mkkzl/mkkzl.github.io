color [] colorList= {#3F51B5, #009688, #E67C73, #F6BF26, #655B68, #7986CB, #F4511E, #039BE5};
PFont light;
PFont bold;
Event[] events;
int count= width*height;
IntList eventList;

void setup() {
  frameRate(3);
  size(600, 800);
  //fullScreen();
  light= createFont("Whitney-Book", 14);
  bold= createFont("Whitney-Bold", 14);
  background(255);
  noStroke();
  for (int i=0; i<height; i+=height/24) {
    fill(#DDDDDD);
    rect(0, i, width, 1);
  }
  eventList= new IntList();
  events= new Event[count];
  for (int index=0; index < count; index++) {
    float x= random(0, 14) *width/14;
    float y= random(0, 24) * (height/24);
    color c=colorList[parseInt(random(colorList.length))];
    events[index]= new Event(x, y, c);
  }
}
void draw() {
  int event= parseInt(random(events.length));
  events[event].display();
  
  switch(keyCode) {
    
  
    case RIGHT:
    
    for (int i=0; i<eventList.size(); i++) {
      events[eventList.get(i)].move();
      events[eventList.get(i)].display();
    }
    case LEFT:
    
    for (int i=0; i<eventList.size(); i++) {
      events[eventList.get(i)].move();
      events[eventList.get(i)].display();
    }
  }
}
