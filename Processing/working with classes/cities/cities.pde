int count;
Table cities;
int rows;



void setup() {
  cities= loadTable("cities.csv", "header");
  background(255);
  size(1000, 1000); // screen size
  frameRate(1);
  rows=cities.getRowCount();

  
}

void draw() {
  int num= parseInt(random(0, count));
  background(255);
  
  TableRow row= cities.getRow(parseInt(random(0, rows )));

    int pop = row.getInt("Population");
    println(pop);
    //String city = row.getString("city");
  for (int i=0; i < pop; i++) {
    int n=12;
    int r=parseInt(random(255));
    int g=parseInt(random(255));
    int b=parseInt(random(255));
    float x= random(0, width); //generate random x and y w/in screen limits
    float y=random(0, height);
    float w= random(0, width/n); 
    float h=random(0, height/n);
    Rectangle rectangle= new Rectangle(x, y, w, h, r, g, b, n);
    rectangle.display();
  }
}
