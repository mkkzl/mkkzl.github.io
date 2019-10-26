
    var img = new Image();
    img.src = 'IMG_5240.jpg'
    var canvasimage = document.getElementById('image');
    var context = canvasimage.getContext('2d');
    canvasimage.width = img.width;
    canvasimage.height = img.height*3;
    img.onload = function() {
  context.drawImage(img, 0, 0);
  img.style.display = 'none';




};

function multiply(newlist){


    var w= 0;
    var n=0;
      while (w<=img.width)
      {
        console.log("drawing");
        var h=img.height;

        while (h<= img.height*2)
        {
            var color= newlist[n];
            context.fillStyle = color;
            context.fillRect(w*h, h, 1, 1);



          n= n+1
          h=h+1
        }
        w= w+1
      }

    };


var gather= document.getElementById("gather");
gather.addEventListener("click", function(){
  var multiply=document.createElement("button");
  multiply.appendChild(document.createTextNode("Multiply"));
  multiply.id= "multiply";
  multiply.addEventListener("click", multiply());
  document.getElementById("buttns").appendChild(multiply);

  var newlist= [];
  var x = 0;
  var y = 0;
  while (x<=img.width){
    while (y<=img.height){
      var imageData = context.getImageData(x, y, 1, 1);

      var data= imageData.data;
      var r= data[0]
      var g= data[1]
      var b= data[2]

      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);

      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
      newlist.push( "#" + r + g + b);
      y= y+1;
    }
    x=x+1;
    y=0;
    return newlist;
  }});
