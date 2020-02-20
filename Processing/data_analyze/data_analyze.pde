Table table;
import java.util.Date;
float press_all=0;
float hum_all=0;
int count=0;
FloatList pressList;
FloatList humList;
FloatList diff_h_l;
float h_l=0;

void setup() {
  table= loadTable("new.csv", "header");
  frameRate(1);
  pressList= new FloatList();
  humList= new FloatList();
  diff_h_l= new FloatList();
}

void draw() {
 
  float press_sd= sd_press();
  float hum_sd=sd_hum();
  float hl_sd= sd_hl();
  float dev2press= press_sd*2;
  float dev2hum= hum_sd*2;
  float dev2hl= hl_sd*2;

  for (TableRow row : table.rows()) {
    String date= row.getString("date");
    String morning=row.getString("morning");
    String middle=row.getString("middle");
    String night=row.getString("night");
    float high= row.getFloat("high");
    float low=row.getFloat("low");
    float pressure=row.getFloat("pressure");
    float humidity=row.getFloat("humidity");
   
    String phrase= "bad";
    float difference= high-low;
    if (morning.contains(phrase) || middle.contains(phrase) || night.contains(phrase)) {
      if(pressure> press_all+dev2press){
        println(date+ "two press away");
      }
      if(pressure< (press_all-dev2press)){
        float dif= press_all-dev2press;
        println(pressure + "," + dif);
       // println(date+ "minus two press away");
      }
      if (humidity> hum_all+dev2hum) {
        println(date+ "two hum away");
      }
      if (humidity< (hum_all-dev2hum)) {
        println(date+ "minus two hum away");
      }
      if (difference> h_l+dev2hl) {
        println(date+ "two hl away");
      }
      if (difference< (h_l-dev2hl)) {
        println(date+ "minus two hl away");
      
    }
  }
    }
}

float sd_press() {
  for (TableRow row : table.rows()) {
    float pressure= row.getFloat("pressure"); 
    if (Float.isNaN(pressure)) {
      continue;
    } else {
      pressList.append(pressure);
      press_all+= pressure;
      count++;
    }
  }
  press_all= press_all/count;
  float mean=0;
  for (int i=0; i<pressList.size(); i++) {
    mean+=sq(pressList.get(i)-press_all);
  }
  mean= sqrt(mean/pressList.size());
  return mean;
}
float sd_hum() {
  count=0;
  for (TableRow row : table.rows()) {
    float humidity= row.getFloat("humidity"); 
    if (Float.isNaN(humidity)) {
      continue;
    } else {
      humList.append(humidity);
      hum_all+= humidity;
      count++;
    }
  }
  hum_all= hum_all/count;
  float mean=0;
  for (int i=0; i<humList.size(); i++) {
    mean+=sq(humList.get(i)-hum_all);
  }
  mean= sqrt(mean/humList.size());
  return mean;
}
float sd_hl() {
  count=0;
  for (TableRow row : table.rows()) {
    float high= row.getFloat("high"); 
    float low= row.getFloat("low"); 
    if (Float.isNaN(high) || Float.isNaN(low)) {
      continue;
    } else {
      diff_h_l.append(high-low);
      h_l+= high-low;
      count++;
    }
  }
  h_l= h_l/count;
  float mean=0;
  for (int i=0; i<diff_h_l.size(); i++) {
    mean+=sq(diff_h_l.get(i)-h_l);
  }
  mean= sqrt(mean/diff_h_l.size());
  return mean;
}
