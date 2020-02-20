
Table word;
int x=50;
int y=50;

void setup(){
  size(500,300);
  word= loadTable("new.csv", "header");
}

void draw() {
  
  for( TableRow row : word.rows()){

   String wod= row.getString("word"); 
  fill(#000000);
  textSize(32);

  text(wod,x,y);
    y= y+30;
  
  }
  noLoop();
  //for( int i=0; i<= word.length; i++){
 // print(word[i]);}
  //noLoop();
}
