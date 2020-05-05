/*
Framework for triangle shape from P3D tutorial on porcessing.org
*/

Table table; // for csv to load into
SD [] variables; //list of objects
PFont font;

int i=0; // for iterating through object array in draw



void setup() {
  background(0);
  size(1000, 1000, P3D);
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
 
    
    variables[i].display();
  
  
   //increase i so I can iterate
  if (i<variables.length-1) {
    i++;
  } else {
    i=0;
  }
}
