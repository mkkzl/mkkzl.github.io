import java.util.HashMap;
import java.util.Map;

// Note the HashMap's "key" is a String and "value" is an Integer
HashMap<String,Integer> hm = new HashMap<String,Integer>();


JSONObject json;


void setup(){
  size(1800, 1500);
  background(#f7f3f0);
  
  loadData();
  int y= 100;
  for (Map.Entry<String, Integer> me : hm.entrySet()) {
    String name= me.getKey();
    Integer count= me.getValue();
    textSize(50);
    text(name + ":"+ count, 100, y);
    y= y+100;
}
    
    
    
   noLoop(); 
}

void loadData(){
    json = loadJSONObject("june-dec2.json");
    JSONArray messages = json.getJSONArray("messages");
    for (int i = 0; i<messages.size(); i++){
        JSONObject message = messages.getJSONObject(i);
        String sender= message.getString("sender_name");
        
        Integer p= hm.get(sender);
           if(p== null) hm.put(sender, 1);
           else hm.put(sender, p+1);}
              
}
