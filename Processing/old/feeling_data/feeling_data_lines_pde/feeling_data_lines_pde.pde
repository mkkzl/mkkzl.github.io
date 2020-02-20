Table table;

void setup() {
  background(#ffffff);
  size(1000, 400);
  table = loadTable("feeling_data.csv", "header");
  float x = 30;
  float y = 30;
  for (TableRow row : table.rows()) {
    //String date=row.getString("date");
    //date=date.replace("/2019", "");
    //stroke(#000000);
    //text(date, x, 20);
    String morning = row.getString("morning");
    String middle = row.getString("middle");
    String night = row.getString("night");
    
    smooth();
    beginShape();
    if (morning.equals("bad")){
      stroke(#df2241);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+90;
      x= x-10;
    } else if (morning.equals("okay")){
      stroke(#ffff66);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+90;
      
    } else if (morning.equals("good")){
      stroke(#1ca363);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+90;
      x=x+10;
    } else if (morning.equals("bad-okay")){
      stroke(#df2241);
      curveVertex(x,y);
      x= x-10;
      curveVertex(x,y);
      y= y+45;
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+45;
    } else if (morning.equals("okay-okay-good")){
      stroke(#ffff66);
      curveVertex(x,y);
      curveVertex(x,y);
      y= y+30;
      stroke(#ffff66);
      curveVertex(x,y); 
      y= y+30;
      stroke(#1ca363);
      curveVertex(x,y);
     x=x+10;
      y=y+30;
    } 
    else if (morning.equals("good-good-okay")){
      stroke(#1ca363);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
      x=x+10;
      stroke(#1ca363);
     curveVertex(x,y);
      y=y+30;
      x=x+10;
      stroke(#ffff66);
     curveVertex(x,y);
      y= y+30;
      
    } else if (morning.equals("okay-bad")){
      stroke(#ffff66);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+45;
      stroke(#df2241);
      curveVertex(x,y);
      x= x-10;
      y= y+45;
    } 
    
    
    
    
    if (middle.equals("bad")){
      stroke(#df2241);
      curveVertex(x,y);
      x= x-10;
      y=y+90;
   
  } else if (middle.equals("okay")){
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+90;
    } else if (middle.equals("good")){
      stroke(#1ca363);
      curveVertex(x,y);
      x=x+10;
      y=y+90;
    } else if (middle.equals("bad-okay")){
      stroke(#df2241);
      curveVertex(x,y);
      x= x-10;
      y= y+45;
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+45;
    } else if (middle.equals("okay-okay-good")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     x=x+10;
      y=y+30;
    } else if (middle.equals("okay-good-good")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     x=x+10;
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     x=x+10;
      y=y+30;
    } else if (middle.equals("good-okay")){
      stroke(#1ca363);
      curveVertex(x,y);
      x=x+10;
      y=y+45;
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+45;
    } else if (middle.equals("okay-okay-bad")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#df2241);
     curveVertex(x,y);
     x= x-10;
      y=y+30;
    }else if (middle.equals("okay-good-okay")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     x=x+10;
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
    }else if (middle.equals("okay-bad")){
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+45;
      stroke(#df2241);
      curveVertex(x,y);
      x= x-10;
      y=y+45;
    } 
    if(middle.equals("bad-bad-okay")){
    stroke(#df2241);
     curveVertex(x,y);
     x= x-10;
      y=y+30;
      stroke(#df2241);
     curveVertex(x,y);
     x= x-10;
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
    }
    
    
    
    
    
    
    
    if (night.equals("bad")){
      stroke(#df2241);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+90;
   
  } else if (night.equals("okay")){
      stroke(#ffff66);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+90;
    } else if (night.equals("good")){
      stroke(#1ca363);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+90;
    } else if (night.equals("bad-okay")){
      stroke(#df2241);
      curveVertex(x,y);
      y=y+45;
      stroke(#ffff66);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+45;
    } else if (night.equals("okay-good")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+45;
      stroke(#1ca363);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+45;
    }
    else if (night.equals("okay-okay-good")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    } else if (night.equals("okay-good")){
      stroke(#ffff66);
      curveVertex(x,y);
      y= y+45;
      stroke(#1ca363);
      curveVertex(x,y);
      curveVertex(x,y);
      y=y+45;
    }else if (night.equals("good-okay-okay")){
      stroke(#1ca363);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    }else if (night.equals("okay-bad-okay")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#df2241);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    }else if (night.equals("bad-bad-okay")){
      stroke(#df2241);
     curveVertex(x,y);
      y=y+30;
      stroke(#df2241);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    }else if (night.equals("okay-bad")){
      stroke(#ffff66);
      curveVertex(x,y);
      y=y+45;
      stroke(#df2241);
      curveVertex(x,y);
      curveVertex(x,y);
      y= y+45;
    } 
    else if(night.equals("okay-okay-bad")){
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#df2241);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    } else if(night.equals("okay-good-okay")){
       
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    }else if(night.equals("good-okay-good")){
       stroke(#1ca363);
     curveVertex(x,y);
      y=y+30;
      stroke(#ffff66);
     curveVertex(x,y);
      y=y+30;
      stroke(#1ca363);
     curveVertex(x,y);
     curveVertex(x,y);
      y=y+30;
    }
    
    
    x=x+5;
    y=30;

  endShape();
  }
}
