Table table;
import java.util.Date;
float press_all=0;
float hum_all=0;
int count=0;
FloatList pressList;
FloatList humList;
FloatList diff_h_l;
float h_l=0;
float mess_all=0;
FloatList messList;
int n=1;
int num=1;

void setup() {
  size(1000, 1000);
  table= loadTable("new.csv", "header");
  frameRate(1);
  pressList= new FloatList();
  humList= new FloatList();
  diff_h_l= new FloatList();
  messList= new FloatList();
  noStroke();
  
}

void draw() {

  float press_sd= sd_press();
  float hum_sd=sd_hum();
  float hl_sd= sd_hl();
  float dev2press= press_sd*2;
  float dev2hum= hum_sd*2;
  float dev2hl= hl_sd*2;
  float message_sd= sd_mess();
  float dev2mess= message_sd*2;

  for (TableRow row : table.rows()) {
    String date= row.getString("date");
    String morning=row.getString("morning");
    String middle=row.getString("middle");
    String night=row.getString("night");
    float high= row.getFloat("high");
    float low=row.getFloat("low");
    float pressure=row.getFloat("pressure");
    float humidity=row.getFloat("humidity");
    int messages= row.getInt("message_count");

    if (morning.equals("")) {
      morning= "void";
    }
    if (middle.equals("")) {
      middle= "void";
    }
    if (night.equals("")) {
      night= "void";
    }
    float difference= high-low;
    if (n>=10) {
      n=1;
      num+=1;
    }
    if (pressure> press_all+dev2press) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (pressure< (press_all-dev2press)) {      
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (humidity> hum_all+dev2hum) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (humidity< (hum_all-dev2hum)) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (difference> h_l+dev2hl) {
      fill(#BCCB58);
      rect(width/100*n, height/100*num, 10, 10);
      n+=1;
    }
    if (difference< (h_l-dev2hl)) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (messages> mess_all+dev2mess) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
    if (messages< (mess_all-dev2mess)) {
      new SD(morning, middle, night, n, num);
      n+=3;
    }
  }
  noLoop();
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
float sd_mess() {
  count=0;
  for (TableRow row : table.rows()) {
    int message= row.getInt("message_count"); 
    if (Float.isNaN(message)) {
      continue;
    } else {
      messList.append(message);
      mess_all+= message;
      count++;
    }
  }
  mess_all= mess_all/count;
  float mean=0;
  for (int i=0; i<messList.size(); i++) {
    mean+=sq(messList.get(i)-mess_all);
  }
  mean= sqrt(mean/messList.size());
  return mean;
}
