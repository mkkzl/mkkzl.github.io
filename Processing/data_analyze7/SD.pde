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
  float hl_before;
  float hum_before;
  float press_before;
  float mess_before;
  float hl_after;
  float press_after;
  float hum_after;
  float mess_after;
  float sd_off_press_before;
  float sd_off_hum_before;
  float sd_off_mess_before;
  float sd_off_hl_before;
  float sd_off_press_after;
  float sd_off_hum_after;
  float sd_off_mess_after;
  float sd_off_hl_after;

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

    float press_sd= sd_press();
    float hum_sd=sd_hum();
    float hl_sd= sd_hl();
    float message_sd= sd_mess();
    float difference= high-low;


    sd_off_press= (press_all-pressure)/press_sd;
    sd_off_hum= (hum_all-humidity)/hum_sd;
    sd_off_mess= (mess_all-messages)/message_sd;
    sd_off_hl= (h_l-difference)/hl_sd;
    //  fill(#7CF0F5);
    //beginShape();
    //vertex(width/4, height/4);
    //bezierVertex(width/6, height/8, width/3*sd_off_press, height/8, width/2, height/4);
    //bezierVertex(width/15*13, height/7*3, width/12*7*sd_off_hum, height/7*3, width/8*7, height/2);
    ////bezierVertex(width/9*7, height/6*5, width/10*9*sd_off_mess, height/6*5, width/8*5, height/8*5);
    //bezierVertex(width/9*4, height/6*4, width/10*4*sd_off_mess, height/6*4, width/4, height/2);
    //bezierVertex(width/9*3, height/6*2, width/10*3*sd_off_hl, height/6*2, width/4, height/4);
    //endShape(CLOSE);
    translate(width/2, height/2, 0);
    stroke(255);
    rotateX(PI/2);
    rotateZ(-PI/6);
    noFill();

    beginShape();
    vertex(   0, 0, 100);
    bezierVertex(-130, -77, -55, -130, -33, -17, -100*sd_off_press, -100, -100);
    bezierVertex( 20, -50, -35, 50, -20, -5, 100*sd_off_hum, -100, -100);

    vertex(   0, 0, 100);
    bezierVertex( 120, -50, -35, 150, -20, -5, 100*sd_off_hum, -100, -100);
    bezierVertex( 50, 65, -90, 50, 35, -50, 100*sd_off_mess, 100, -100);


    vertex(   0, 0, 100);
    bezierVertex( 180, 65, -90, 120, 35, -50, 100*sd_off_mess, 100, -100);
    bezierVertex(-50, 50, -30, -20, 44, -15, -100*sd_off_hl, 100, -100);


    vertex(   0, 0, 100);
    bezierVertex(-70, 88, -30, -66, 44, -15, -100*sd_off_hl, 100, -100);
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
      fill(200);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (morning.equals("bad")) {
      fill(#C47D7D);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (morning.equals("okay")) {
      fill(#F7F7B9);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (morning.equals("good")) {
      fill(#A2D3A0);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (morning.equals("bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (morning.equals("okay-okay-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (morning.equals("good-good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (morning.equals("okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (morning.equals("good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (morning.equals("okay-okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (morning.equals("bad-okay-good")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    }




    if (middle.equals("")) {
      fill(200);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (middle.equals("bad")) {
      fill(#C47D7D);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (middle.equals("okay")) {
      fill(#F7F7B9);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (middle.equals("good")) {
      fill(#A2D3A0);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (middle.equals("bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (middle.equals("okay-okay-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("okay-good-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (middle.equals("okay-okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("okay-good-okay")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
    }
    if (middle.equals("bad-bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("good-good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("good-okay-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("okay-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#A2D3A0);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (middle.equals("good-okay-bad")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("bad-bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (middle.equals("bad-okay-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    }




    if (night.equals("")) {
      fill(200);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (night.equals("bad")) {
      fill(#C47D7D);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (night.equals("okay")) {
      fill(#F7F7B9);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (night.equals("good")) {
      fill(#A2D3A0);
      rect(x, 0, width/3, height);
      x=x+width/3;
    } else if (night.equals("bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (night.equals("okay-okay-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("okay-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#A2D3A0);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (night.equals("good-okay-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("okay-bad-okay")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("bad-bad-okay")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#C47D7D);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (night.equals("okay-okay-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("okay-good-okay")) {

      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("good-okay-good")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("good-good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("okay-bad-bad")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("good-okay")) {
      fill(#A2D3A0);
      rect(x, 0, width/6, height);
      x=x+width/6;
      fill(#F7F7B9);
      rect(x, 0, width/6, height);
      x=x+width/6;
    } else if (night.equals("okay-good-good")) {
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#A2D3A0);
      rect(x, 0, width/9, height);
      x=x+width/9;
    } else if (night.equals("bad-okay-bad")) {
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#F7F7B9);
      rect(x, 0, width/9, height);
      x=x+width/9;
      fill(#C47D7D);
      rect(x, 0, width/9, height);
      x=x+width/9;
    }

    x=0;
  }
}
