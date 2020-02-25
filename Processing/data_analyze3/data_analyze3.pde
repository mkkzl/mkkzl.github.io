Table table; // for csv to load into
SD [] variables; //list of objects

int i=230; // for iterating through object array in draw


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
  if (i>0 && i<variables.length-1){
    float highPrev= variables[i-1].high;
    float lowPrev=variables[i-1].low;
    int messPrev=variables[i-1].messages;
    float humPrev=variables[i-1].humidity;
    float pressPrev=variables[i-1].pressure;
    float highAft= variables[i+1].high;
    float lowAft=variables[i+1].low;
    int messAft=variables[i+1].messages;
    float humAft=variables[i+1].humidity;
    float pressAft=variables[i+1].pressure;
    
    variables[i].display(highPrev, lowPrev, messPrev, humPrev, pressPrev, highAft, lowAft, messAft, humAft, pressAft);
    
  }
  else if(i>=variables.length-1){
    float highPrev= variables[i-1].high;
    float lowPrev=variables[i-1].low;
    int messPrev=variables[i-1].messages;
    float humPrev=variables[i-1].humidity;
    float pressPrev=variables[i-1].pressure;
    variables[i].display(highPrev, lowPrev, messPrev, humPrev, pressPrev, 0,0,0,0,0);
  
  }
  else if (i<= 0){
    float highAft= variables[i+1].high;
    float lowAft=variables[i+1].low;
    int messAft=variables[i+1].messages;
    float humAft=variables[i+1].humidity;
    float pressAft=variables[i+1].pressure;
    variables[i].display(0,0,0,0,0, highAft, lowAft, messAft, humAft, pressAft);
  }
  
   //increase i so I can iterate
  if (i<variables.length-1) {
    i++;
  } else {
    i=0;
  }
}
