Table table;
Table f_table;

void setup() {
  size(1000, 700); 
  background(#faf2e5);
  
  table = loadTable("new.csv", "header");
  f_table = loadTable("feeling_data.csv", "header");

}
  void draw(){
    float  x=50; 
    
float y=0;
for (TableRow row : f_table.rows()) {
    /*String date=row.getString("date");
    date=date.replace("/2019", "");
    fill(#000000);
    text(date, x, 20);*/
    String morning = row.getString("morning");
    String middle = row.getString("middle");
    String night = row.getString("night");
    
    noStroke();
    
    if (morning.equals("bad")){
      fill(#df2241,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (morning.equals("okay")){
      fill(#ffff66,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (morning.equals("good")){
      fill(#1ca363,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (morning.equals("bad-okay")){
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
    } else if (morning.equals("okay-okay-good")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
    } 
    else if (morning.equals("good-good-okay")){
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      
    } else if (morning.equals("okay-bad")){
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
    } 
    
    
    
    
    if (middle.equals("bad")){
      fill(#df2241,50);
      rect(x,y,20,200);
      y= y+200;
   
  } else if (middle.equals("okay")){
      fill(#ffff66,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (middle.equals("good")){
      fill(#1ca363,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (middle.equals("bad-okay")){
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
    } else if (middle.equals("okay-okay-good")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
    } else if (middle.equals("okay-good-good")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
    } else if (middle.equals("good-okay")){
      fill(#1ca363,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
    } else if (middle.equals("okay-okay-bad")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
    }else if (middle.equals("okay-good-okay")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }else if (middle.equals("okay-bad")){
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
    } 
    if(middle.equals("bad-bad-okay")){
    fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }
    
    
    
    
    if (night.equals("bad")){
      fill(#df2241,50);
      rect(x,y,20,200);
      y= y+200;
   
  } else if (night.equals("okay")){
      fill(#ffff66,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (night.equals("good")){
      fill(#1ca363,50);
      rect(x,y,20,200);
      y= y+200;
    } else if (night.equals("bad-okay")){
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
    } else if (night.equals("okay-good")){
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#1ca363,50);
      rect(x,y,20,100);
      y= y+100;
    }
    else if (night.equals("okay-okay-good")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
    } else if (night.equals("okay-good")){
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#1ca363,50);
      rect(x,y,20,100);
      y= y+100;
    }else if (night.equals("good-okay-okay")){
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }else if (night.equals("okay-bad-okay")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }else if (night.equals("bad-bad-okay")){
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }else if (night.equals("okay-bad")){
      fill(#ffff66,50);
      rect(x,y,20,100);
      y= y+100;
      fill(#df2241,50);
      rect(x,y,20,100);
      y= y+100;
    } 
    else if(night.equals("okay-okay-bad")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
    } else if(night.equals("okay-good-okay")){
       
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
    }else if(night.equals("good-okay-good")){
       fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
    }
    else if (night.equals("good-good-okay")){
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#1ca363,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      
    }else if(night.equals("okay-bad-bad")){
      fill(#ffff66,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
      fill(#df2241,50);
      rect(x,y,20,67);
      y= y+67;
    } 
    
    
    x=x+20;
    y=0;

}    
    
    
  float hy=0;
  float ly=0;
  float hmy=0;
  float py=0;
stroke(#634331);  

line(50, 100, 700, 100);
line(50, 200, 700, 200);
line(50, 300, 700, 300);
line(50, 400, 700, 400);
line(50, 500, 700, 500);
line(50, 600, 700, 600);
line(50, 0, 50, 600);

/*fill(#634331);
text("100, 1030, .95", 10, 100);
text("80,1025, .9", 10, 200);
text("60,1020, .85", 10, 300);
text("40,1015, .8", 10, 400);
text("20,1010, .67", 10, 500);*/
  x=60;
  for (TableRow row : table.rows()) {
    
    Float high = row.getFloat("high");
    Float low = row.getFloat("low"); 
    Float humidity = row.getFloat("humidity");
    Float pressure = row.getFloat("pressure");
    noStroke();
   hy= 600-(high*5);
   fill(#974726);
   circle(x, hy, 10);
   ly= 600-(low*5);
   fill(#bac29b);
   ellipse(x, ly, 10,7);
   hmy= 600-((humidity-.7)*100*20);
   fill(#3D5068);
   rect((x-5), hmy, 10, 10);
   py= 600-((pressure-1005)*20);
   fill(#FAA916);
   rect((x-5), py, 10,5);
   
   
   
   x=x+20;
  

}



noLoop();
save("weather_graph.jpg");
  }
