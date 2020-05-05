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
  String morning;
  String middle;
  String night;
  String date;
  int x=0;
  color first;
  color second;
  color third;
  color fourth;
  color fifth;
  color sixth;
  color seventh;
  color eighth;
  color ninth;
  color bad= #D6988F;
  color good=#9AD68F;
  color okay=#D3D68F;


  SD(String dateTemp, String morningTemp, String middleTemp, String nightTemp, float highTemp, float lowTemp, float pressureTemp, float humidityTemp, int messagesTemp) {
    date=dateTemp;
    morning= morningTemp;
    middle=middleTemp;
    night=nightTemp;
    high= highTemp;
    low=lowTemp;
    humidity= humidityTemp;
    pressure= pressureTemp;
    messages=messagesTemp;
  }

  void display() { //makes a square of different color for each variable with height according to how many standard deviations it is away from mean
    background(0);
    feeling();

    float press_sd= sd_press();
    float hum_sd=sd_hum();
    float hl_sd= sd_hl();
    float message_sd= sd_mess();
    float difference= high-low;

    sd_off_press= (press_all-pressure)/press_sd;
    sd_off_hum= (hum_all-humidity)/hum_sd;
    sd_off_mess= (mess_all-messages)/message_sd;
    sd_off_hl= (h_l-difference)/hl_sd;

    translate(width/2, height/2, 0);
    stroke(255);
    rotateX(PI/2);
    rotateZ(-PI/6);
    rotateY(PI);
    scale(1.5);
    noFill();

    beginShape();
    fill(first);
    vertex(   0, 0, 100);
    fill(second);
    bezierVertex(-130, -77, -55, -130, -33, -17, -100*sd_off_press, -100, -100); 
    fill(third);
    bezierVertex( 20, -50, -35, 50, -20, -5, 100*sd_off_hum, -100, -100);

    vertex(   0, 0, 100);
    fill(fourth);
    bezierVertex( 120, -50, -35, 150, -20, -5, 100*sd_off_hum, -100, -100);
    fill(fifth);
    bezierVertex( 50, 65, -90, 50, 35, -50, 100*sd_off_mess, 100, -100);
   
    vertex(   0, 0, 100);
    fill(sixth);
    bezierVertex( 180, 65, -90, 120, 35, -50, 100*sd_off_mess, 100, -100);
    fill(seventh);
    bezierVertex(-50, 50, -30, -20, 44, -15, -100*sd_off_hl, 100, -100);

    
    vertex(   0, 0, 100);
    fill(eighth);
    bezierVertex(-70, 88, -30, -66, 44, -15, -100*sd_off_hl, 100, -100);
    fill(ninth);
    bezierVertex(-70, -77, -55, -70, -33, -17, -100*sd_off_press, -100, -100);

    endShape();
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
  void feeling() {
    noStroke();
    if (morning.equals("")) {
    } else if (morning.equals("bad")) {
      first=bad;
      second=bad;
      third=bad;
    } else if (morning.equals("okay")) {
      first=okay;
      second=okay;
      third=okay;
    } else if (morning.equals("good")) {
      first=good;
      second=good;
      third=good;
    } else if (morning.equals("bad-okay")) {
      first=bad;
      second=bad;
      third=okay;
    } else if (morning.equals("okay-okay-good")) {
      first=okay;
      second=okay;
      third=good;
    } else if (morning.equals("good-good-okay")) {
      first=good;
      second=good;
      third=okay;
    } else if (morning.equals("okay-bad")) {
      first=okay;
      second=bad;
      third=bad;
    } else if (morning.equals("good-okay")) {
      first=good;
      second=good;
      third=okay;
    } else if (morning.equals("okay-okay-bad")) {
      first=okay;
      second=okay;
      third=bad;
    } else if (morning.equals("bad-okay-good")) {
      first=bad;
      second=okay;
      third=good;
    }

    if (middle.equals("")) {
    } else if (middle.equals("bad")) {
      fourth=bad;
      fifth=bad;
      sixth=bad;
    } else if (middle.equals("okay")) {
     fourth=okay;
      fifth=okay;
      sixth=okay;
    } else if (middle.equals("good")) {
      fourth=good;
      fifth=good;
      sixth=good;
    } else if (middle.equals("bad-okay")) {
      fourth=bad;
      fifth=bad;
      sixth=okay;
    } else if (middle.equals("okay-okay-good")) {
      fourth=okay;
      fifth=good;
      sixth=good;
    } else if (middle.equals("okay-good-good")) {
      fourth=okay;
      fifth=good;
      sixth=good;
    } else if (middle.equals("good-okay")) {
      fourth=good;
      fifth=good;
      sixth=okay;
    } else if (middle.equals("okay-okay-bad")) {
      fourth=okay;
      fifth=okay;
      sixth=bad;
    } else if (middle.equals("okay-good-okay")) {
      fourth=okay;
      fifth=good;
      sixth=okay;
    } else if (middle.equals("okay-bad")) {
      fourth=okay;
      fifth=bad;
      sixth=bad;
    }
    if (middle.equals("bad-bad-okay")) {
      fourth=bad;
      fifth=bad;
      sixth=okay;
    } else if (middle.equals("good-good-okay")) {
      fourth=good;
      fifth=good;
      sixth=okay;
    } else if (middle.equals("good-okay-okay")) {
      fourth=good;
      fifth=good;
      sixth=okay;
    } else if (middle.equals("okay-good")) {
      fourth=okay;
      fifth=good;
      sixth=good;
    } else if (middle.equals("good-okay-bad")) {
      fourth=good;
      fifth=okay;
      sixth=bad;
    } else if (middle.equals("bad-bad-okay")) {
      fourth=bad;
      fifth=bad;
      sixth=okay;
    } else if (middle.equals("bad-okay-okay")) {
      fourth=bad;
      fifth=okay;
      sixth=okay;
    }

    if (night.equals("")) {
    } else if (night.equals("bad")) {
      seventh=bad;
      eighth=bad;
      ninth=bad;
    } else if (night.equals("okay")) {
      seventh=okay;
      eighth=okay;
      ninth=okay;
    } else if (night.equals("good")) {
      seventh=good;
      eighth=good;
      ninth=good;
    } else if (night.equals("bad-okay")) {
      seventh=bad;
      eighth=bad;
      ninth=okay;
    } else if (night.equals("okay-okay-good")) {
      seventh=okay;
      eighth=okay;
      ninth=good;
    } else if (night.equals("okay-good")) {
      seventh=okay;
      eighth=good;
      ninth=good;
    } else if (night.equals("good-okay-okay")) {
      seventh=good;
      eighth=okay;
      ninth=okay;
    } else if (night.equals("okay-bad-okay")) {
      seventh=okay;
      eighth=bad;
      ninth=okay;
    } else if (night.equals("bad-bad-okay")) {
      seventh=bad;
      eighth=bad;
      ninth=okay;
    } else if (night.equals("okay-bad")) {
      seventh=okay;
      eighth=bad;
      ninth=bad;
    } else if (night.equals("okay-okay-bad")) {
      seventh=okay;
      eighth=bad;
      ninth=bad;
    } else if (night.equals("okay-good-okay")) {
      seventh=okay;
      eighth=good;
      ninth=okay;
    } else if (night.equals("good-okay-good")) {
      seventh=good;
      eighth=okay;
      ninth=good;
    } else if (night.equals("good-good-okay")) {
      seventh=good;
      eighth=good;
      ninth=okay;
    } else if (night.equals("okay-bad-bad")) {
      seventh=okay;
      eighth=bad;
      ninth=bad;
    } else if (night.equals("good-okay")) {
      seventh=good;
      eighth=good;
      ninth=okay;
    } else if (night.equals("okay-good-good")) {
      seventh=okay;
      eighth=good;
      ninth=good;
    } else if (night.equals("bad-okay-bad")) {
      seventh=bad;
      eighth=okay;
      ninth=bad;
    }
  }
}
