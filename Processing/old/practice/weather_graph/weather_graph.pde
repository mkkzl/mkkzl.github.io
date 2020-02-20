Table table;

void setup() {
  size(1000, 700); 
  background(#faf2e5);
  
  table = loadTable("new.csv", "header");}
  void draw(){
    float  x=60; 
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
text("20,1010, .75", 10, 500);*/
  
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
   rect(x, hmy, 10, 10);
   py= 600-((pressure-1005)*20);
   fill(#FAA916);
   rect(x, py, 10,5);
   
   
   
   x=x+20;
  

}
noLoop();
save("weather_graph.jpg");
  }
