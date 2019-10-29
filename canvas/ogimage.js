
var img = new Image();
img.src = 'IMG_5240.jpg'
var canvasimage = document.getElementById('image');
var context = canvasimage.getContext('2d');
canvasimage.width = img.width;
canvasimage.height = img.height*3;
img.onload = function() {
context.drawImage(img, 0, 0);
img.style.display = 'none';
console.log("first image done");
  };

var button= document.getElementById("gather");
button.addEventListener("click",function(){

console.log("in function");






  var newlist= [];
  var x = 0;
  var y = 0;
  while (x<=img.width){
    if(x== img.width-1){"almost done"};
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
    var w= 0;
    var n=0;

    /* while (w<=img.width)
      {
        if(x<1 && y <1 && w<1){console.log("drawing width");}

        var h=img.height;

        while (h<= img.height*2)
        {
          if(x<1 && y <1 && w<1 && h<img.height+1){console.log("drawing height");}
            var color= newlist[n];
            context.fillStyle = color;
            context.fillRect(w*h, h, 1, 1);



          n= n+1
          h=h+1
        }
        w= w+1
      }
        console.log(newlist);*/

    }
    console.log(newlist);
  });
