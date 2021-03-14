import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// Note the HashMap's "key" is a String and "value" is an Integer
HashMap<String,Integer> hm = new HashMap<String,Integer>();


JSONObject json;
//IntDict dict;

String[] times = {};

String [] dateArray = {};

Table newtable;





void setup(){
  size(9000, 1500);
  background(#f7f3f0);
  newtable= new Table();
  newtable.addColumn("date");
  newtable.addColumn("m_count");
  loadData();
   Date currentDate = new Date(2019, 5, 29);
    int u=0;
   /* int d= currentDate.getDate();
         int m=currentDate.getMonth();
         int y1= currentDate.getYear();
         String date= str(d);
         String month= str(m+1);
         String year= str(y1);
         String day = month+'/'+ date + '/' + year;
         //dateArray= append(dateArray, day);
        currentDate.setDate(currentDate.getDate()+71);*/
        
    while(u<=1000) {
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
//for (Map.Entry me : hm.entrySet()) {
  //Object k= me.getKey();
  //Object v= me.getValue();
  
  Integer v= hm.get(dateArray[o]);
  if (v== null){noStroke();
      rect(x,y,10,0);
      x = x+15;
    println(dateArray[o]);}
  else{
    TableRow newrow = newtable.addRow();
    newrow.setString("date", dateArray[o]);
    newrow.setInt("m_count", v);
      if (v <=100){
        fill(#be7a6d);
      }  if (v > 100){
          fill(#b98e49);
        }  if (v> 200){
            fill(#2a4965);
          }  if (v > 500){
              fill(#9a5538);
            }  if (v > 750){
                fill(#c4d7d1);
              }  if (v > 1000){
                  fill(#7b2d45);

                }
    noStroke();
      rect(x,y,10,v);
        x = x+15;}
  
  
 // textSize(32);
   //    text(( k + " count:" + v), 10, y); 
     //   fill(0, 102, 153);
       //    y= y+32;
       
      
  }
 save("graph_all.jpg");   
 saveTable(newtable, "data/latest.csv");
 
}

void loadData(){
    json = loadJSONObject("june2019-jan312021.json");
    JSONArray messages = json.getJSONArray("messages");
    //dict= new IntDict();
    
        
    for (int i = 0; i<messages.size(); i++){
        JSONObject message = messages.getJSONObject(i);
        long timestamp = message.getLong("timestamp_ms");
        String content= message.getString("content");
       /*if(content.equals("The video chat ended.")== true){
        print("video");}else if(content.equals("Graham Cracker missed your video chat.")== true){
        print("video");
        }else if(content.equals("You missed a video chat with Graham Cracker.")== true){print("video");}
        else{*/
         Date time = new Date(timestamp);
         //String test= time.toLocaleString();
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
    //  boolean contains = Arrays.stream(times).anyMatch(day:: equals);
      //if (times.contains(day)){}
       //times=append(times, day);
        //}
       

       
}

 

  //}
  
 // print(times);
