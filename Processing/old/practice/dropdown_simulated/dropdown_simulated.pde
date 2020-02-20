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
boolean June;
boolean July;
boolean August;
boolean September;

JSONObject json;
//IntDict dict;

String[] times = {};

String [] dateArray = {};

color rectColor= #000000;
color textColor= #ffffff;

void setup() {
  size(600, 300);
  
  
  loadData();
  
    
}

void draw() {
  noLoop();
  update(mouseX, mouseY);
  if (mouseX <100 && mouseX>50){
  print(mouseX, mouseY);}
  background(128);
  int x= 50;
  int y= 100;
  for( int i=0; i<months.length; i++){
    fill(rectColor);
    stroke(153);
    rect(x, y,100, 20);
    y= y+25;
    
  
  }
  y= 115;
  for( int i=0; i<months.length; i++){
  fill(textColor);
    text(months[i], x+15, y);
    y= y+25;
  }
  
  // get values selected from dropdown
  // insert month, day, year selected into string instead
  
   
   //String date = month+'/'+ day + '/' + year;
  //String date= "6/29/2019";
  // Integer v= hm.get(date);
  // textSize(30);
  // text(v, 375, 120);
}

void update(int x, int y) {
  if ( x> 50 && x<100 && y> 100 && y<120 ) {
    June = true;
    July = false;
    August= false;
    September= false;
    print("June");
  } else if (  x> 50 && x<100 && y> 145 && y<165  ) {
    June = false;
    July = true;
    August= false;
    September= false;
  } else if (  x> 50 && x<100 && y> 170 && y<190  ) {
    June = false;
    July = false;
    August= true;
    September= false;
  } else if (  x> 50 && x<100 && y> 215 && y<235  ) {
    June = false;
    July = false;
    August= false;
    September= true;
  } else {
    June = false;
    July = false;
    August= false;
    September= false;
  }
}
void mousePressed() {
  if (June) {
    text("June", 200, 50);
  }
  if (July) {
    text("July", 200, 50);
  }
  if (August) {
    text("August", 200, 50);
  }
  if (September) {
    text("September", 200, 50);
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
