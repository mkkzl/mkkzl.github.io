int y;
int x;
int n;
boolean show_instructions = true;
int time_to_end_instructions;

void setup(){
  size(500,500);
  background(#ffffff);
  frameRate(2);
  time_to_end_instructions = millis() + 3000;
}
void draw(){
  noStroke();
  
  if( show_instructions ){
    fill(#000000);
    textSize(18);
    text("During the program,", 25, height/2);
    text("use the alphabetic keys to change color.", 25, height/2 +30);
    text("Program will start in 3 seconds.", 25, height/2+60);
   if(millis() > time_to_end_instructions){
     show_instructions = false;
   }
   return;
 }

    background(#ffffff);
  for(y=0; y<500; y+=20){
    
    //to do 
    // go backwards in gradient 
    // fade into one another
    
    // iterate
    for(x=0; x<500; x+=20){
      fill(n,0,0);
      // revert back down
      if(n==0 || n==255){
      n= n*-1;
      }
      //change to blue
      if(key== 'n' || key=='m' ||key=='o'){
        fill(0,0,n);
    }
    //change to green
      if(key== 'p' || key=='q' ||key=='r'){
        fill(0,n,0);
    }
      if(key== 's' || key=='t' ||key=='u'){
        fill(n,n,0);
    }
    if(key== 'v' || key=='w' ||key=='x'){
        fill(0,n,n);
    }
    if(key== 'y' || key=='z' ||key=='a'){
        fill(n,0,n);
    }
      n++;
      rect(x,y, 20, 20);
    }
    
  }
  
}
