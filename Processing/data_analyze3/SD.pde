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

  void display(float highPrev, float lowPrev, int messPrev, float humPrev, float pressPrev, float highAft, float lowAft, int messAft, float humAft, float pressAft) { //makes a square of different color for each variable with height according to how many standard deviations it is away from mean
    feeling();
    fill(0);
    textSize(32); //set up text on lines
    text(date, width/12*9, height/8);
    for (int n=1; n<9; n++) { //set up lines
      stroke(0);
      if (n==4) {
        strokeWeight(2);
      } else {
        strokeWeight(1);
      }
      line(0, height/8 *n, width, height/8*n);
    }
    fill(0); //set up text on lines
    text("3", width/12, height/8);
    text("2", width/12, height/4);
    text("1", width/12, height/8*3);
    text("0", width/12, height/2);
    text("-1", width/12, height/8*5);
    text("-2", width/12, height/4*3);
    text("-3", width/12, height/8*7);
    strokeWeight(0);
    float press_sd= sd_press();
    float hum_sd=sd_hum();
    float hl_sd= sd_hl();
    float message_sd= sd_mess();
    float difference= high-low;
    float diff_before= highPrev-lowPrev;
    float diff_after= highAft-lowAft;
    
    sd_off_press= (press_all-pressure)/press_sd;
    sd_off_hum= (hum_all-humidity)/hum_sd;
    sd_off_mess= (mess_all-messages)/message_sd;
    sd_off_hl= (h_l-difference)/hl_sd;
    sd_off_press_before= (press_all-pressPrev)/press_sd;
    sd_off_hum_before= (hum_all-humPrev)/hum_sd;
    sd_off_mess_before= (mess_all-messPrev)/message_sd;
    sd_off_hl_before= (h_l-diff_before)/hl_sd;
    sd_off_press_after= (press_all-pressAft)/press_sd;
    sd_off_hum_after= (hum_all-humAft)/hum_sd;
    sd_off_mess_after= (mess_all-messAft)/message_sd;
    sd_off_hl_after= (h_l-diff_after)/hl_sd;
    
    float center= height/2;
    float multiply= height/8;
    
    press_high= center-(sd_off_press*multiply);
    fill(#561F37);
    rect(width/2, press_high, 10, 10);

    hum_high= center-(sd_off_hum*multiply);
    stroke(#797854);
    strokeWeight(3);
    noFill();
    rect(width/2, hum_high, 10, 10);

    mess_high= center-(sd_off_mess*multiply);
    noStroke();
    fill(#245519);
    circle(width/2+5, mess_high, 10);

    hl_high= center-(sd_off_hl*multiply);
    stroke(#385F71);
    strokeWeight(3);
    noFill();
    circle(width/2+5, hl_high, 10);
    
    if(pressPrev > 0 && pressAft >0){
    strokeWeight(2);
    stroke(#561F37);
    press_before= center-(sd_off_press_before*multiply);
    line(0, press_before, width/2+5, press_high);
    press_after= center-(sd_off_press_after*multiply);
    line( width/2+5, press_high,width, press_after);

    
    stroke(#797854);
    hum_before= center-(sd_off_hum_before*multiply);
    line(0, hum_before, width/2+5, hum_high);
    hum_after= center-(sd_off_hum_after*multiply);
    line( width/2+5, hum_high,width, hum_after);
    
    stroke(#245519);
    mess_before= center-(sd_off_mess_before*multiply);
    line(0, mess_before, width/2+5, mess_high);
    mess_after= center-(sd_off_mess_after*multiply);
    line( width/2+5, mess_high,width, mess_after);
    
    stroke(#385F71);
    hl_before= center-(sd_off_hl_before*multiply);
    line(0, hl_before, width/2+5, hl_high);
    hl_after= center-(sd_off_hl_after*multiply);
    line( width/2+5, hl_high,width, hl_after);
    
    }
    else if (pressPrev ==0){
      strokeWeight(2);
    stroke(#561F37);
    press_after= center-(sd_off_press_after*multiply);
    line( width/2+5, press_high,width, press_after);

    
    stroke(#797854);
    hum_after= center-(sd_off_hum_after*multiply);
    line( width/2+5, hum_high,width, hum_after);
    
    stroke(#245519);
    mess_after= center-(sd_off_mess_after*multiply);
    line( width/2+5, mess_high,width, mess_after);
    
    stroke(#385F71);
    hl_after= center-(sd_off_hl_after*multiply);
    line( width/2+5, hl_high,width, hl_after);
      
    }
    else if(pressAft==0){
      strokeWeight(2);
    stroke(#561F37);
    press_before= center-(sd_off_press_before*multiply);
    line(0, press_before, width/2+5, press_high);

    
    stroke(#797854);
    hum_before= center-(sd_off_hum_before*multiply);
    line(0, hum_before, width/2+5, hum_high);
    
    stroke(#245519);
    mess_before= center-(sd_off_mess_before*multiply);
    line(0, mess_before, width/2+5, mess_high);
    
    stroke(#385F71);
    hl_before= center-(sd_off_hl_before*multiply);
    line(0, hl_before, width/2+5, hl_high);
    }
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
    }else if (morning.equals("bad-okay-good")) {
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
