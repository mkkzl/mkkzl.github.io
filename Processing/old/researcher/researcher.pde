int timer;
    int scale_rate=1;
    int rotate_rate=2;
Boolean   doIt= true;
JSONObject json; //so information can be loaded
String[] lines = {}; //String list of all the quotes I will gather
String[] namesList= {}; //String list for all names I will gather
String[] recList= {}; //String list for all recommendations I will gather
float y=10; //used for positioning text
float x= 10; //used for positioning text


void setup() {
  size(600, 800); //make screen 600 by 800 px
  frameRate(1); // speed of writing
  background(0); // background black
  loadData(); // create String list once
}

void draw() {
  keyTyped();
  writetoScreen(); // run function so text appears
  keyPressed();
  /*if (millis() - timer >= 10000) { 
    background(0);
    timer = millis();
  }*/
}

void writetoScreen() {
  if(doIt){
  int line_number= parseInt(random(0, lines.length)); //choose random index
  String line= lines[line_number]; //choose quote with random index
  for (char letter : line.toCharArray()) //iterate through characters in quote
  {
    text(letter, x, y); //write text to screen
    if (x<width-20) { //what happens if text reaches right side of screen
      x+=10;
    } else {
      x= 10;
      y+=15;
    }
    if (y> height-20) { //what happens if text reaches bottom of screen
      background(0);
      y=10;
    }
  }
}
}

void namesList(){
  int line_number= parseInt(random(0, namesList.length)); //choose random index
  String line= namesList[line_number]; //choose name with random index
  for (char letter : line.toCharArray()) //iterate through characters in name
  {
    textSize(30);
    text(letter, x, y); //write text to screen
    if (x<width-25) { //what happens if text reaches right side of screen
      x+=25;
    } else {
      x= 10;
      y+=30;
    }
    if (y> height-30) { //what happens if text reaches bottom of screen
      background(0);
      y=20;
    }
  }
}

void recList(){
  int line_number= parseInt(random(0, recList.length)); //choose random index
  String line= recList[line_number]; //choose rec with random index
  for (char letter : line.toCharArray()) //iterate through characters in rec
  {
    textSize(18);
    text(letter, x, y); //write text to screen
    if (x<width-16) { //what happens if text reaches right side of screen
      x+=16;
    } else {
      x= 10;
      y+=20;
    }
    if (y> height-20) { //what happens if text reaches bottom of screen
      background(0);
      y=20;
    }
  }
}
void recBig(){
  frameRate(10);
  background(255, 0, 0);
  x=40;
  y=80;
  int line_number= parseInt(random(0, recList.length)); //choose random index
  String line= recList[line_number]; //choose rec with random index
  for (char letter : line.toCharArray()) //iterate through characters in rec
  {
    textSize(40);
    text(letter, x, y); //write text to screen
    if (x<width-80) { //what happens if text reaches right side of screen
      x+=38;
    } else {
      x= 40;
      y+=40;
    }
  }
}

void loadData() { //to load data and generate lists of data
  json = loadJSONObject("quotes.json"); //get data
  JSONArray names= json.getJSONArray("names"); //get all names
  for (int m = 0; m<names.size(); m++) {
      String name = names.getString(m); //get each name
      namesList= append(namesList, name); //add to String list each name
    }
    JSONArray rec= json.getJSONArray("recommended"); //get all names
  for (int r = 0; r<rec.size(); r++) {
      String recs = rec.getString(r); //get each name
      recList= append(recList, recs); //add to String list each name
    }
  JSONArray books = json.getJSONArray("books"); //get books
  for (int i = 0; i<books.size(); i++) {
    JSONObject line = books.getJSONObject(i); //get each book
    //String book= line.getString("book");
    JSONArray quote_list= line.getJSONArray("quotes"); //from each book, get all quotes
    for (int n = 0; n<quote_list.size(); n++) {
      String quote = quote_list.getString(n); //get each quote
      lines= append(lines, quote); //add to String list each quote
    }
  }
}

void keyTyped(){

  if(key== 'o'){
    translate(0,0);
    float angle = radians(rotate_rate);
    rotate(angle);
    rotate_rate+=2;
  }
  if(key== 's'){
    frameRate(5);
    scale(1.1*scale_rate);
    scale_rate ++;
    println(scale_rate);
  }
}

void keyPressed(){
  if(key=='n'){
    doIt=false;
    namesList();
  }
  if(key=='r'){
    doIt=false;
    recList();
  }
  if(key=='c'){
    doIt=false;
    recBig();
  }

}
