PImage image1;
import processing.net.*;
JSONObject json;
  Table table;
import java.util.Date;


void setup()
{
  size(1000, 700); 
  background(#faf2e5);
  table = new Table();
  
  table.addColumn("timestamp");
  table.addColumn("high");
  table.addColumn("low");
  table.addColumn("pressure");
  table.addColumn("humidity");
  
  
  
}
void draw()
{
  float  x=60; 
  float hy=0;
  float ly=0;
stroke(#634331);  
long timestamp= 1581667200;
line(50, 100, 700, 100);
line(50, 200, 700, 200);
line(50, 300, 700, 300);
line(50, 400, 700, 400);
line(50, 500, 700, 500);
line(50, 600, 700, 600);
line(50, 0, 50, 600);

fill(#634331);
text("100", 10, 100);
text("80", 10, 200);
text("60", 10, 300);
text("40", 10, 400);
text("20", 10, 500);
   int u=0;
   //u should be 30 for aug 13-sept 16
   
   
   
while(u<=10) {
        TableRow newRow = table.addRow();
        newRow.setLong("timestamp", timestamp);
        // pburg 41.5570, -83.6272 
        //gville 29.6201, -82.3726
        //manistee 44.2444, -86.3243
        // boca 26.3683, -80.1289
        // stillwater 45.0560, -92.8088
        
        json  = loadJSONObject("https://api.darksky.net/forecast/ee9f5606f38812d12988c80ce6013f71/29.6201, -82.3726,"+timestamp);
        timestamp= timestamp + 86400;
        u=u+1;
    
  JSONObject daily= json.getJSONObject("daily");
  JSONArray data=daily.getJSONArray("data");
  for (int i = 0; i<data.size(); i++){
    JSONObject data_point= data.getJSONObject(i);
    //long time=data_point.getLong("time");
    float high= data_point.getFloat("temperatureHigh");
    float low=data_point.getFloat("temperatureLow");
    float humidity=data_point.getFloat("humidity");
    float pressure= data_point.getFloat("pressure");
  
    //String text= "High:" + high + "Low:" + low + "Humidity:" + humidity + "Pressure:" + pressure;
   // textSize(32);
   //text(text, 100, 100); 
   noStroke();
   //hy= 600-(high*5);
   //fill(#974726);
   //circle(x, hy, 10);
   //ly= 600-(low*5);
   //fill(#bac29b);
   //circle(x, ly, 10);
   
   
   //x=x+20;
   
   
  newRow.setFloat("high", high);
  newRow.setFloat("low", low);
  newRow.setFloat("humidity", humidity);
  newRow.setFloat("pressure", pressure);
  
 
     
}
}
noLoop();
 saveTable(table, "data/feb14-24.csv");
//save("high_lows.jpg");
}
