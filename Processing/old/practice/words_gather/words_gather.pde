String text;
Table word;
int x=50;
int y=50;

void setup(){
  size(500,300);
   word = new Table();
word.addColumn("word");
  loadData();
  
}

void draw() {
noLoop();
}

void loadData(){
String url="https://www.merriam-webster.com/word-of-the-day/calendar";
String[] lines = loadStrings(url);
String start= "<h2><a href=\"/word-of-the-day/";
String end="-2019";


for (int i=0; i< lines.length; i++){
  if (giveMeTextBetween(lines[i], start, end)!= null){
  text= giveMeTextBetween(lines[i], start, end);
  TableRow newRow = word.addRow();
  newRow.setString("word", text);}
  
  //text(text,x,y);
  //x= x+10;

  

}
saveTable(word, "data/new.csv");

//

}

String giveMeTextBetween(String s, String before, String after) {

  // This function returns a substring between two substrings (before and after).
  //  If it can’t find anything it returns an empty string.
  String found = null;

  // Find the index of before
  int start = s.indexOf(before);     
  if (start == -1) {
    return null;                       
  }    

  // Move to the end of the beginning tag
  // and find the index of the "after" String      
  start += before.length();    
  int end = s.indexOf(after, start); 
  if (end == -1) {
    return null;                       
  }

  // Return the text in between
  return s.substring(start, end); 
}
