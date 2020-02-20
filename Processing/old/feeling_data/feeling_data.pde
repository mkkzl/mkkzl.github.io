//AIzaSyD5UmlaRYNouVLpZJLSblivoZxJhz0uxEU

Table table;

void setup() {
  background(#ffffff);
  size(1600, 160);
  table = loadTable("feeling_data.csv", "header");
  float x = 30;
  float y = 30;
  for (TableRow row : table.rows()) {
    /*String date=row.getString("date");
    date=date.replace("/2019", "");
    fill(#000000);
    text(date, x, 20);*/
    String morning = row.getString("morning");
    String middle = row.getString("middle");
    String night = row.getString("night");
    
    noStroke();
    
    if (morning.equals("bad")){
      fill(#df2241);
      rect(x,y,30,30);
      y = y+30;
    } else if (morning.equals("okay")){
      fill(#ffff66);
      rect(x,y,30,30);
      y = y+30;
    } else if (morning.equals("good")){
      fill(#1ca363);
      rect(x,y,30,30);
      y = y+30;
    } else if (morning.equals("bad-okay")){
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
    } else if (morning.equals("okay-okay-good")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
    } 
    else if (morning.equals("good-good-okay")){
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      
    } else if (morning.equals("okay-bad")){
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
    } 
    
    
    
    
    if (middle.equals("bad")){
      fill(#df2241);
      rect(x,y,30,30);
      y = y+30;
   
  } else if (middle.equals("okay")){
      fill(#ffff66);
      rect(x,y,30,30);
      y = y+30;
    } else if (middle.equals("good")){
      fill(#1ca363);
      rect(x,y,30,30);
      y = y+30;
    } else if (middle.equals("bad-okay")){
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
    } else if (middle.equals("okay-okay-good")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
    } else if (middle.equals("okay-good-good")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
    } else if (middle.equals("good-okay")){
      fill(#1ca363);
      rect(x,y,30,15);
      y = y+15;
      fill(#ffff66);
      rect(x,y,30,15);
      y= y+15;
    } else if (middle.equals("okay-okay-bad")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y = y+10;
    }else if (middle.equals("okay-good-okay")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if (middle.equals("okay-bad")){
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
    } 
    if(middle.equals("bad-bad-okay")){
    fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if(middle.equals("good-good-okay")){
       fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      
    }
    
    
    
    
    if (night.equals("bad")){
      fill(#df2241);
      rect(x,y,30,30);
      y = y+30;
   
  } else if (night.equals("okay")){
      fill(#ffff66);
      rect(x,y,30,30);
      y = y+30;
    } else if (night.equals("good")){
      fill(#1ca363);
      rect(x,y,30,30);
      y = y+30;
    } else if (night.equals("bad-okay")){
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
    } else if (night.equals("okay-good")){
      fill(#ffff66);
      rect(x,y,30,15);
      y= y+15;
      fill(#1ca363);
      rect(x,y,30,15);
      y = y+15;
    }
    else if (night.equals("okay-okay-good")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
    } else if (night.equals("okay-good")){
      fill(#ffff66);
      rect(x,y,30,15);
      y= y+15;
      fill(#1ca363);
      rect(x,y,30,15);
      y = y+15;
    }else if (night.equals("good-okay-okay")){
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if (night.equals("okay-bad-okay")){
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if (night.equals("bad-bad-okay")){
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if (night.equals("okay-bad")){
      fill(#ffff66);
      rect(x,y,30,15);
      y = y+15;
      fill(#df2241);
      rect(x,y,30,15);
      y= y+15;
    } 
    else if(night.equals("okay-okay-bad")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
    } else if(night.equals("okay-good-okay")){
       
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y = y+10;
    }else if(night.equals("good-okay-good")){
       fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
    }
    else if (night.equals("good-good-okay")){
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#1ca363);
      rect(x,y,30,10);
      y = y+10;
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      
    }else if(night.equals("okay-bad-bad")){
      fill(#ffff66);
      rect(x,y,30,10);
      y= y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
      fill(#df2241);
      rect(x,y,30,10);
      y= y+10;
    }  else if (night.equals("good-okay")){
      fill(#1ca363);
      rect(x,y,30,15);
      y = y+15;
      fill(#ffff66);
      rect(x,y,30,15);
      y= y+15;
    }
    
    
    x=x+30;
    y=30;

}
noLoop();
 save("feeling_graph.tif"); 
}
