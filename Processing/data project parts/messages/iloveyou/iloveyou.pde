

int count=0;
JSONObject json;



void setup(){
  size(1800, 1500);
  background(#f7f3f0);
  loadData();
  
    textSize(32);
    text(count, 10, 30);
    
}

void loadData(){
    json = loadJSONObject("june-feb12.json");
    JSONArray messages = json.getJSONArray("messages");
    for (int in = 0; in<messages.size(); in++){
        JSONObject message = messages.getJSONObject(in);
        String content= message.getString("content");
        //String i= "i";
        String love= "love";
        String you= "you";
        if (content != null){
        if (content.contains(love) && content.contains(you) ){
          count= count +1;
        }
        }
           
}
}
