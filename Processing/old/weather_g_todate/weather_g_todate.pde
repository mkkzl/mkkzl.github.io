import java.util.Date;

Table weather_table;
Table date_table;
void setup(){

  size(15, 15);
  background(#f7f3f0);
  date_table= new Table();
  date_table.addColumn("date");
  date_table.addColumn("high");
  date_table.addColumn("low");
  date_table.addColumn("humidity");
  date_table.addColumn("pressure");
  weather_table= loadTable("weather_table.csv", "header");
  for (TableRow row : weather_table.rows()) {
    float humidity = row.getFloat("humidity");
    float pressure = row.getFloat("pressure");
    float high = row.getFloat("high");
    float low = row.getFloat("low");
    long timestamp = row.getLong("timestamp");
  
  
  TableRow newRow = date_table.addRow();
  
  
  
  Date time = new Date(timestamp *1000);
  print(time + ",");
         //String test= time.toLocaleString();
         int d= time.getDate();
         int m= time.getMonth();
         int y1= time.getYear();
         String date= str(d);
         String month= str(m+1);
         String year= str(y1+1900);
         String day = month+'/'+ date + '/' + year;
          newRow.setFloat("high", high);
  newRow.setFloat("low", low);
  newRow.setFloat("humidity", humidity);
  newRow.setFloat("pressure", pressure);
  newRow.setString("date", day);
  }
  
  
  noLoop();
 saveTable(date_table, "data/date_table.csv");
}
