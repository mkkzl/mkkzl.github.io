Table table;

void setup() {
  background(#ffffff);
  size(1500, 400);
  table = loadTable("feeling_data.csv", "header");
  float x = 30;
  float y = 30;
  for (TableRow row : table.rows()) {
    //String date=row.getString("date");
    //date=date.replace("/2019", "");
    //fill(#000000);
    //text(date, x, 20);
    String morning = row.getString("morning");
    String middle = row.getString("middle");
    String night = row.getString("night");
    
    noStroke();
    
    if (morning.equals("bad")){
      fill(#df2241);
      circle(x,y,30);
      y= y+45;
    } else if (morning.equals("okay")){
      fill(#ffff66);
      circle(x,y,30);
      y= y+45;
    } else if (morning.equals("good")){
      fill(#1ca363);
      circle(x,y,30);
      y= y+45;
    } else if (morning.equals("bad-okay")){
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
    } else if (morning.equals("okay-okay-good")){
      fill(#ffff66);
      circle(x,y,10);
      y= y+25;
      fill(#ffff66);
      circle(x,y,10);
      y= y+25;
      fill(#1ca363);
      circle(x,y,10);
      y= y+25;
    } 
    else if (morning.equals("good-good-okay")){
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      
    } else if (morning.equals("okay-bad")){
      fill(#ffff66);
     circle(x,y,15);
      y= y+30;
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
    } 
    
    
    
    
    if (middle.equals("bad")){
      fill(#df2241);
      circle(x,y,30);
      y= y+45;
   
  } else if (middle.equals("okay")){
      fill(#ffff66);
      circle(x,y,30);
      y= y+45;
    } else if (middle.equals("good")){
      fill(#1ca363);
      circle(x,y,30);
      y= y+45;
    } else if (middle.equals("bad-okay")){
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
    } else if (middle.equals("okay-okay-good")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
    } else if (middle.equals("okay-good-good")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
    } else if (middle.equals("good-okay")){
      fill(#1ca363);
      circle(x,y,15);
      y= y+30;
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
    } else if (middle.equals("okay-okay-bad")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
    }else if (middle.equals("okay-good-okay")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }else if (middle.equals("okay-bad")){
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
    } 
    if(middle.equals("bad-bad-okay")){
    fill(#df2241);
     circle(x,y,10);
      y= y+25;
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }
    
    
    
    
    if (night.equals("bad")){
      fill(#df2241);
     circle(x,y,30);
      y= y+45;
   
  } else if (night.equals("okay")){
      fill(#ffff66);
      circle(x,y,30);
      y= y+45;
    } else if (night.equals("good")){
      fill(#1ca363);
      circle(x,y,30);
      y= y+45;
    } else if (night.equals("bad-okay")){
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
    } else if (night.equals("okay-good")){
      fill(#ffff66);
     circle(x,y,15);
      y= y+30;
      fill(#1ca363);
      circle(x,y,15);
      y= y+30;
    }
    else if (night.equals("okay-okay-good")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
    } else if (night.equals("okay-good")){
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
      fill(#1ca363);
      circle(x,y,15);
      y= y+30;
    }else if (night.equals("good-okay-okay")){
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }else if (night.equals("okay-bad-okay")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }else if (night.equals("bad-bad-okay")){
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }else if (night.equals("okay-bad")){
      fill(#ffff66);
      circle(x,y,15);
      y= y+30;
      fill(#df2241);
      circle(x,y,15);
      y= y+30;
    } 
    else if(night.equals("okay-okay-bad")){
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#df2241);
     circle(x,y,10);
      y= y+25;
    } else if(night.equals("okay-good-okay")){
       
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
    }else if(night.equals("good-okay-good")){
       fill(#1ca363);
     circle(x,y,10);
      y= y+25;
      fill(#ffff66);
     circle(x,y,10);
      y= y+25;
      fill(#1ca363);
     circle(x,y,10);
      y= y+25;
    }else if (night.equals("good-good-okay")){
      fill(#1ca363);
      circle(x,y,10);
       y= y+25;
      fill(#1ca363);
       circle(x,y,10);
       y= y+25;
      fill(#ffff66);
       circle(x,y,10);
       y= y+25;
      
    }else if(night.equals("okay-bad-bad")){
      fill(#ffff66);
       circle(x,y,10);
       y= y+25;
      fill(#df2241);
       circle(x,y,10);
      y= y+25;
      fill(#df2241);
       circle(x,y,10);
       y= y+25;
    } 
    
    
    x=x+40;
    y=30;

}
noLoop();
save("circles_graph.tif");
}
