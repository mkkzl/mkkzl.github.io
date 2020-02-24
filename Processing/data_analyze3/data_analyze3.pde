Table table; // for csv to load into
SD [] variables; //list of objects

int i=0; // for iterating through object array in draw


void setup() {
  background(255);
  size(1000, 1000);
  table= loadTable("new.csv", "header"); //get csv table
  frameRate(1);
  int counting=0; //for iterating through rows, adding objects to list in setup
  variables= new SD[table.getRowCount()]; //add number of variables based on table row count
  for (TableRow row : table.rows()) { //for each row make object using data from table row
    String date= row.getString("date");
    String morning=row.getString("morning");
    String middle=row.getString("middle");
    String night=row.getString("night");
    float high= row.getFloat("high");
    float low=row.getFloat("low");
    float pressure=row.getFloat("pressure");
    float humidity=row.getFloat("humidity");
    int messages= row.getInt("message_count");    
    variables[counting]= new SD(date, morning, middle, night, high, low, pressure, humidity, messages);
    counting++;
  }
  
 
}

void draw() {
  background(255);
   //set up graph look
  
  stroke(2);
  for(int n=1; n<9; n++){ //set up lines
  line(0, height/8 *n, width, height/8*n);
  }
  fill(0);
  textSize(32); //set up text on lines
  text("3", width/12, height/8);
  text("2", width/12, height/4);
  text("1", width/12, height/8*3);
  text("0", width/12, height/2);
  text("-1", width/12, height/8*5);
  text("-2", width/12, height/4*3);
  text("-3", width/12, height/8*7);
  noStroke();

  //try to display object if not null pointer exception
  try {
    variables[i].display();
  } catch (NullPointerException e) {
    //println("except" + i);
  }
  
  
  //println(i);
   
   //increase i so I can iterate
  if (i<variables.length) {
    i++;
  } else {
    i=0;
  }
}
