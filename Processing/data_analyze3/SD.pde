class SD {
  float press_all=0;
  float hum_all=0;
  FloatList pressList= new FloatList();
  FloatList humList= new FloatList();
  FloatList diff_h_l= new FloatList();
  float h_l=0;
  float mess_all=0;
  FloatList messList= new FloatList();
  float sd_off_press;
  float sd_off_hum;
  float sd_off_mess;
  float sd_off_hl;
  float press_high;
  float hum_high;
  float mess_high;
  float hl_high;
  float high;
  float low;
  float pressure;
  float humidity;
  int messages;


  SD(String date, String morning, String middle, String night, float highTemp, float lowTemp, float pressureTemp, float humidityTemp, int messagesTemp) {


    high= highTemp;
    low=lowTemp;
    humidity= humidityTemp;
    pressure= pressureTemp;
    messages=messagesTemp;
  }

  void display() { //makes a square of different color for each variable with height according to how many standard deviations it is away from mean
    float press_sd= sd_press();
    float hum_sd=sd_hum();
    float hl_sd= sd_hl();
    float message_sd= sd_mess();
    float difference= high-low;
    sd_off_press= (press_all-pressure)/press_sd;
    sd_off_hum= (hum_all-humidity)/hum_sd;
    sd_off_mess= (mess_all-messages)/message_sd;
    sd_off_hl= (h_l-difference)/hl_sd;
    float center= height/2;
    float multiply= height/8;
    press_high= center-(sd_off_press*multiply);
    fill(#CB5858);
    rect(width/2, press_high, 10, 10);


    hum_high= center-(sd_off_hum*multiply);
    fill(#6358CB);
    rect(width/2, hum_high, 10, 10);

    mess_high= center-(sd_off_mess*multiply);
    fill(#58CBAE);
    rect(width/2, mess_high, 10, 10);

    hl_high= center-(sd_off_hl*multiply);
    fill(#A3CB58);
    rect(width/2, hl_high, 10, 10);
  }

  float sd_press() { //calculte standard deviation for pressure
    int count=0;
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
  float sd_hum() { //calculate standard deviation for humidity
    int count=0;
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
  float sd_hl() { //calculate standard deviation for high-low difference
    int count=0;
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
  float sd_mess() { //calculate standard deviation for messages
    int count=0;
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
}
