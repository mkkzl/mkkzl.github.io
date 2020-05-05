import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// Note the HashMap's "key" is a String and "value" is an Integer
HashMap<String,Integer> hm = new HashMap<String,Integer>();
JSONObject json;
String[] times = {};
String [] dateArray = {};
Table newtable;
String target= "kiss";


void setup(){
  size(5000, 400);
  background(#f7f3f0);
  newtable= new Table();
  newtable.addColumn("date");
  newtable.addColumn("w_count");
  loadData();
   Date currentDate = new Date(2019, 5, 29);
    int u=0;
        
    while(u<=360) {
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
    float x = 30;
float y = 30;

for (int o = 0; o<dateArray.length; o++){
  Integer v= hm.get(dateArray[o]);
  if (v== null){noStroke();
      rect(x,y,10,0);
      x = x+15;}
  else{
    TableRow newrow = newtable.addRow();
    newrow.setString("date", dateArray[o]);
    newrow.setInt("w_count", v);
      if (v <=5){
        fill(#be7a6d);
      }  if (v > 5){
          fill(#b98e49);
        }  if (v> 10){
            fill(#2a4965);
          }  if (v > 20){
              fill(#9a5538);
            }  if (v > 30){
                fill(#c4d7d1);
              }  if (v > 40){
                  fill(#7b2d45);

                }
    noStroke();
      rect(x,y,10,v*5);
        x = x+15;}   
  }
 save("graph_all.jpg");   
 saveTable(newtable, "data/june-apr29.csv");
 
}


void loadData(){
    json = loadJSONObject("june-apr29.json");
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
         
         String [] list = split(content, ' ');
        if (content != null){
        int lst_lng= list.length;
        
        for (int w=0; w<lst_lng; w++){
          String word= list[w].toLowerCase();
          
          if (word.contains(target)){
           
           Integer p= hm.get(day);
           if(p== null) hm.put(day, 1);
           else hm.put(day, p+1);}
        }
       

       
}
    }
}
