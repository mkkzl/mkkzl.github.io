Table table;
Table table2;
Table newtable;

void setup() {
  background(#ffffff);
  size(500, 700,P3D);
  //table2=loadTable("app_data.csv", "header");
  table = loadTable("comp_data_1026.csv", "header");
  newtable= new Table();
  

}

void draw(){
  //float x = 30;
  float x= 100;
  float y = 30;
 
  int count=0;
  int last_dt=0;
  
  newtable.addColumn("date");
  newtable.addColumn("count");
  
  
  for (TableRow row : table.rows()) {
    String name=row.getString("Name");
    String date=row.getString("Start");
    String duration = row.getString("Duration");
    
    String [] dt=split(date, "/");
    String [] d= split(duration, ":");
    String [] table_date=split(date, " ");

    int minute= int(d[1]);
    int day=int(dt[1]);

   
    if(last_dt != day && count != 0){
      TableRow newRow = newtable.addRow();
      noFill();
      strokeWeight(5);
        stroke(#df2241);
      //circle(x, 350, count);
      //print(table_date[0] + "," + count + ";");
      //print(table_date[0] + ",");
      newRow.setString("date",table_date[0]);
      newRow.setInt("count",count);
      last_dt=day;
      y=30;
      x=x+30;    
    count=0;}

    if (name.equals("Active")){
    count= count+minute;
  }
  
  noLoop();
save("comp.jpg");
saveTable(newtable, "data/comp_table_newest.csv");
}











 /* if(name.equals("Away") || name.equals("Power off") || name.equals("Session lock")){
    fill(#000000);
    
    rect(x,y,30,minute);
    y = y+minute;
  }*/
  
}
/*float x2 = 0;
  float y2 = 30;
  int last_dt2=0;
  int n=0;
 
for (TableRow row2 : table2.rows()) {
  
    String date=row2.getString("Start");
    String duration = row2.getString("Duration");
    String app=row2.getString("Process");
    String [] dt=split(date, "/");
    String [] d= split(duration, ":");
    //int hour= int(d[0]);
    int minute= int(d[1]);
    //int second= int(d[2]);
    int day=int(dt[1]);
    noStroke();
  
  if(last_dt2 != day){
      last_dt2=day;
      y2=30;
      x2=x2+30;
    //count=0;Java(TM) Platform SE 8
  }
  int number=9;
  try{
  number= Integer.valueOf(app);}catch (NumberFormatException e){number=8;}
  if (number==1){
    fill(#555555, 50);
  
    rect(x2,y2,30,minute);
    y2 = y2+minute;
    
  }else{y2 = y2+minute;}
  n=n+1;
}*/
