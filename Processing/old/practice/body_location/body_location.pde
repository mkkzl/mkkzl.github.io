//PImage image;
Table table;

void setup(){
  //image=loadImage("body_image.png");
  size(900,900);
  background(#ffffff);
  //surface.setResizable(true);
  //surface.setSize(image.width, image.height);
  table=loadTable("data_test.csv", "header");
  frameRate(4);
  
 

}
void draw(){
  int n=0;
  //image(image, 0, 0, width, height);
  fill(255, 0,0);
       // chest circle(260, 200, 50);
       // mid back circle(655, 300, 50);
       // back of lower left leg circle(615, 720, 50);
  circle(900, 900, 5);
  for(TableRow row : table.rows()){
    

    //String date= row.getString("date");
    String location= row.getString("location");
    String [] locations= split(location, ",");
    
         for(int i=0; i<locations.length; i++){
       
        if (locations[i].equals("chest")== true){
          
          fill(255, 0,0);
        circle(260, 200, 50);}
      else if (locations[i].equals("back")== true){
        
        circle(655, 300, 50);
      
      }
      else if (locations[i].equals("leg")== true){
        
        circle(615, 720, 50);
      
      }
       
       
      }
     
      
    
    
    
  
  }
  noLoop();
}
