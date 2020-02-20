import controlP5.*;
ControlP5 cp5;
String [] months= { "June", "July", "August", "September"};
// "January", "February", "March", "April", "May", , "October", "November", "December"
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
String day;
String month;
String year;
// Note the HashMap's "key" is a String and "value" is an Integer
HashMap<String,Integer> hm = new HashMap<String,Integer>();


JSONObject json;
//IntDict dict;

String[] times = {};

String [] dateArray = {};








void setup() {
  size(600, 300);
  cp5 = new ControlP5(this);
  
 
  DropdownList droplist = cp5.addDropdownList("Month").setPosition(50, 100);
  DropdownList droplist_day = cp5.addDropdownList("Day").setPosition(150, 100);
  DropdownList droplist_year= cp5.addDropdownList("Year").setPosition(250,100);
  
  
  for (int i=0; i<months.length; i++) {
    droplist.addItem(months[i], i);
  }
  for (int i=0; i<32; i++) {
    droplist_day.addItem(""+i, i);
  }
  droplist_year.addItem("2019", 0);
  

  
  
  droplist.setItemHeight(30);
  droplist.setBarHeight(15);
  droplist_day.setItemHeight(30);
  droplist_day.setBarHeight(15);
  droplist_year.setItemHeight(30);
  droplist_year.setBarHeight(15);
  
  day= droplist_day.getItem("Day").toString();
  month= droplist.getItem("Month").toString() ;
  year= droplist_year.getItem("Year").toString();
  
  
  
  loadData();
  
    
}
 
void draw() {
  noLoop();
  background(128);
  
  
  // get values selected from dropdown
  // insert month, day, year selected into string instead
  
   
   String date = month+'/'+ day + '/' + year;
  //String date= "6/29/2019";
   Integer v= hm.get(date);
   textSize(30);
   text(v, 375, 120);
}
 
 
 
 
// controlEvent monitors clicks on the gui
void controlEvent(ControlEvent theEvent) {
  if (theEvent.isGroup()) {
    println(theEvent.getGroup() + " => " + theEvent.getGroup().getValue());
  }
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
