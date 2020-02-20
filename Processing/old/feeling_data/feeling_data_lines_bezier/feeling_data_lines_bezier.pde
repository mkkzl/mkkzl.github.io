Table table;
String morning;
    String middle;
    String night;
float x = 48;
  float y = 48;
  int n=1;
void setup() {
  background(#ffffff);
  size(1000, 300);
  
  noFill();
  table = loadTable("feeling_data.csv", "header");
}
 void draw(){
  
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
    vertex(x,y);
   
    if (morning.equals("bad")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48+48, x+(24), y+48+48+(24), x+48, y+48);
      x=x+48;
      y=y+48;
      
    } else if (morning.equals("okay")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(24), x+48, y+48, x+48, y+48);
      x=x+48;
      y=y+48;
    } else if (morning.equals("good")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+48, y, x+48+(24), y+(24), x+48, y+48);
       x=x+48;
       y=y+48;
    } else if (morning.equals("bad-okay")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24; 
    } else if (morning.equals("okay-okay-good")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
    } 
    else if (morning.equals("good-good-okay")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
       bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
       bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
    } else if (morning.equals("okay-bad")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
       bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
    } 
    
    
    
    
    if (middle.equals("bad")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48+48, x+(24), y+48+48+(24), x+48, y+48);
      x=x+48;
      y=y+48;
  } else if (middle.equals("okay")){
    strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(24), x+48, y+48, x+48, y+48);
      x=x+48;
      y=y+48;
    } else if (middle.equals("good")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+48, y, x+48+(24), y+(24), x+48, y+48);
       x=x+48;
      y=y+48;      
    } else if (middle.equals("bad-okay")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;      
    } else if (middle.equals("okay-okay-good")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;  
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
    } else if (middle.equals("okay-good-good")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
    } else if (middle.equals("good-okay")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(24), y, x+(36), y+(12), x+(24), y+(24));
       x=x+24;
      y=y+24;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24; 
    } else if (middle.equals("okay-okay-bad")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
     bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;      
    }else if (middle.equals("okay-good-okay")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;      
    }else if (middle.equals("okay-bad")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
    } 
    if(middle.equals("bad-bad-okay")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
    bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
     bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
    }
    
    
    
    
    
    
    
    if (night.equals("bad")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48+48, x+(24), y+48+48+(24), x+48, y+48);
      x=x+48;
      y=y+48;   
  } else if (night.equals("okay")){
    strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(24), x+48, y+48, x+48, y+48);
      x=x+48;
      y=y+48;
    } else if (night.equals("good")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+48, y, x+48+(24), y+(24), x+48, y+48);
       x=x+48;
      y=y+48;
    } else if (night.equals("bad-okay")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;
    } else if (night.equals("okay-good")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(24), y, x+(36), y+(12), x+(24), y+(24));
       x=x+24;
      y=y+24;
    }
    else if (night.equals("okay-okay-good")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
    } else if (night.equals("good-okay-okay")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;      
    }else if (night.equals("okay-bad-okay")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
     bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
    }else if (night.equals("bad-bad-okay")){
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
    bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12; 
    }else if (night.equals("okay-bad")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
       bezierVertex(x, y+(12), x+(24), y+(24), x+(24), y+(24));
      x=x+24;
      y=y+24;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+48, x+(12), y+48+(12), x+(24), y+(24));
      x=x+24;
      y=y+24;
    } 
    else if(night.equals("okay-okay-bad")){  
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
    } else if(night.equals("okay-good-okay")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
     bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
    }else if(night.equals("good-okay-good")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
       bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x, y+(8), x+(16), y+(16), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
    }
    else if (night.equals("good-good-okay")){
      strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#1ca363);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
      
    }else if(night.equals("okay-bad-bad")){
      strokeWeight(0);
     fill(#ffff66);
       circle(x,y,5);
      noFill(); 
      strokeWeight(2);
      bezierVertex(x+(16), y, x+(24), y+(8), x+(16), y+(16));
       x=x+12;
       y=y+12;
       strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
      strokeWeight(0);
       fill(#df2241);
       circle(x,y,5);
       noFill();
       strokeWeight(2);
      bezierVertex(x, y+(32), x+(8), y+(40), x+(16), y+(16));
      x=x+12;
      y=y+12;
    } 
    
    
    
    x=48+(n*20);
    y=48;
    n= n+1;

  endShape();
  }
  noLoop();
   save("line_graph.tif"); 
}
