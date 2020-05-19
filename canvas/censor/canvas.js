window.addEventListener("load", function () {
    var img = new Image();
    img.src = 'IMG_5240.jpg'
    var canvasimage = document.getElementById('image');
    var context = canvasimage.getContext('2d');
    canvasimage.width = img.width;
    canvasimage.height = img.height;
    img.onload = function() {
  context.drawImage(img, 0, 0);
  img.style.display = 'none';
  myFunction(context,img)
};
  });

function myFunction(context, img){
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
  }
  var w= 0;
  var n=0;
  var canvassmall = document.getElementById('newimage');
    var ctx = canvassmall.getContext("2d");
    canvassmall.width =img.width;
    canvassmall.height= img.height;
    while (w<=img.width)
    {
      var h=0

      while (h<= img.height)
      {
        var number= Math.floor(Math.random() * 6) + 1;

        if ( number == 1 ) {
          var color= newlist[n];
          ctx.fillStyle = color;
          ctx.fillRect(w, h, 1, 1);
        } else if ( number == 2 ) {
          var color= newlist[n];
          ctx.fillStyle = color;
          ctx.fillRect(w, h, 1, 1);
        } else if ( number == 3 ) {
          var color= newlist[n];
          ctx.fillStyle = color;
          ctx.fillRect(w, h, 1, 1);
        }
        else{
          var color= '#000000'
          ctx.fillStyle = color;
          ctx.fillRect(w, h, 1, 1);
        }
        if (n < 5){  console.log(number)}



        n= n+1
        h=h+1
      }
      w= w+1
    }

}
