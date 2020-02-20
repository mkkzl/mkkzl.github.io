import java.util.Date;
import java.util.HashMap;
import java.util.Map;


Table table;
Table feeling_table;
Table weather_table;

HashMap<String,Integer> hm = new HashMap<String,Integer>();


JSONObject json;
//IntDict dict;

String[] times = {};

String [] dateArray = {};
void setup(){
    loadData();
  size(15, 15);
  background(#f7f3f0);
  
  table = new Table();
  feeling_table= loadTable("feeling_data.csv", "header");
  weather_table= loadTable("date_table.csv", "header");
  
  table.addColumn("date");
  table.addColumn("message_count");
  table.addColumn("morning");
  table.addColumn("middle");
  table.addColumn("night");
  table.addColumn("high");
  table.addColumn("low");
  table.addColumn("pressure");
  table.addColumn("humidity");
  
  
  Date currentDate = new Date(2019, 5, 29);
    int u=0;
        
    while(u<=100) {
        int d= currentDate.getDate();
         int m=currentDate.getMonth();
         int y1= currentDate.getYear();
         String date= str(d);
         String month= str(m+1);
         String year= str(y1);
         String day = month+'/'+ date + '/' + year;
         dateArray= append(dateArray, day);
        currentDate.setDate(currentDate.getDate()+1);
        u=u+1;
    }

for (int o = 0; o<dateArray.length; o++){
  TableRow newRow = table.addRow();
   for (TableRow row : feeling_table.rows()) { 
   String date = row.getString("date");
    String morning = row.getString("morning");
    String middle = row.getString("middle");
    String night = row.getString("night");
   if (date.equals(dateArray[o])){
     newRow.setString("morning", morning);
     newRow.setString("middle", middle);
     newRow.setString("night", night);
   }
  
 }   

   for (TableRow row : weather_table.rows()) { 
   String date = row.getString("date");
    float humidity = row.getFloat("humidity");
    float pressure = row.getFloat("pressure");
    float high = row.getFloat("high");
    float low = row.getFloat("low");
   if (date.equals(dateArray[o])){
     newRow.setFloat("humidity", humidity);
     newRow.setFloat("pressure", pressure);
     newRow.setFloat("high", high);
     newRow.setFloat("low", low);
    
   }
   
   }
 
 
  Integer v= hm.get(dateArray[o]);
  
        newRow.setString("date", dateArray[o]);
        if(v != null){newRow.setFloat("message_count", v);}else{
        newRow.setFloat("message_count", 0);}
        
        
}
    


  noLoop();
 saveTable(table, "data/new.csv");

}   


void loadData(){
    json = loadJSONObject("message_1.json");
    JSONArray messages = json.getJSONArray("messages");

    
        
    for (int i = 0; i<messages.size(); i++){
        JSONObject message = messages.getJSONObject(i);
        long timestamp = message.getLong("timestamp_ms");
        String content= message.getString("content");

         Date time = new Date(timestamp);
        
         int d= time.getDate();
         int m= time.getMonth();
         int y1= time.getYear();
         String date= str(d);
         String month= str(m+1);
         String year= str(y1+1900);
         String day = month+'/'+ date + '/' + year;
         
        
           Integer p= hm.get(day);
           if(p== null) hm.put(day, 1);
           else hm.put(day, p+1);}
       

}
