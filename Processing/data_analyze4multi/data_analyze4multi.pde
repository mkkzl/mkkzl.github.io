Table table; // for csv to load into
SD [] variables; //list of objects
PFont font;

int i=0; // for iterating through object array in draw
//P3D?? depth in the graphics
//data driving a not interesting form
//http://www.rlfbckr.org/work/interface-i/

void setup() {
  background(255);
  size(1000, 1000);
  table= loadTable("new.csv", "header"); //get csv table
  font = createFont("CuteFont-Regular.ttf", 32);
  frameRate(.5);
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
 background(#ffffff);
    
    variables[i].display(0);
    variables[i+1].display(1);
    variables[i+2].display(2);
    variables[i+3].display(3);
    variables[i+4].display(4);
    variables[i+5].display(5);
    variables[i+6].display(6);
    fill(#0F6367);
 
  
  
   //increase i so I can iterate
  if (i<variables.length-7) {
    i+=7;
  } else {
    i=0;
  }
}
