import java.util.HashMap;
import java.util.Map;

// Note the HashMap's "key" is a String and "value" is an Integer
HashMap<String,Integer> hm = new HashMap<String,Integer>();


JSONObject json;

Table newtable;

void setup(){
  size(1800, 1500);
  background(#f7f3f0);
  newtable= new Table();
  newtable.addColumn("word");
  newtable.addColumn("count");
  loadData();
  
  for (Map.Entry<String, Integer> me : hm.entrySet()) {
    TableRow newrow = newtable.addRow();
    newrow.setString("word",me.getKey());
    newrow.setInt("count",me.getValue());
}
    
    saveTable(newtable, "data/message_words2.csv");
    textSize(32);
    text("complete", 10, 30);
    
}

void loadData(){
    json = loadJSONObject("june-jan29.json");
    JSONArray messages = json.getJSONArray("messages");
    for (int i = 0; i<messages.size(); i++){
        JSONObject message = messages.getJSONObject(i);
        String content= message.getString("content");
        String [] list = split(content, ' ');
        if (content != null){
        int lst_lng= list.length;
        
        for (int w=0; w<lst_lng; w++){
          String word= list[w].toLowerCase();
          word= word.replace(",", "");
          word= word.replace("!", "");
          word= word.replace("?", "");
          word= word.replace(".", "");
          word= word.replace("*", "");
          word= word.replace("Ã¢Â€Â™", "'");
        Integer p= hm.get(word);
           if(p== null) hm.put(word, 1);
           else hm.put(word, p+1);}
        }
           
}
}
