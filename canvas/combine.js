document.getElementById('canvas').onload = function() {loadImages()};
function loadImages(sources, callback){
  var images= {};
  var loadedImages= 0;
  var numImages= 0;
  for (var src in sources){
    numImages++
  }
  for(var src in sources){
    images[src]= new Image ();
    images[src].onload= function(){
      if(++loadedImages >= numImages){
        callback(images);
      }
    };
    images[src].src= sources[src];
  }

}
var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');
var sources= {
  image1: 'IMG_5240.jpg',
  image2: 'MC1_0099.jpg'
};
loadImages(sources, function(images){
  context.drawImage(images.image1, 0, 0, images.image1.width, images.image1.height)
  context.drawImage(images.image2, (images.image1.width +10), (images.image1.height +10), images.image2.width, images.image2.height)
});




  /*var list= [];
  var newlist= [];

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

  //myFunction(context,img)
  console.log('through first image')
  //myFunction3(img)

};
  });
window.addEventListener("load", function () {
  var image = new Image();
  image.src = 'MC1_0099.jpg'
  var canvas2image = document.getElementById('image2');
  var ctx = canvas2image.getContext('2d');
  canvas2image.width = image.width;
  canvas2image.height = image.height;
  image.onload = function() {
  ctx.drawImage(image, 0, 0);
  image.style.display = 'none';

//  myFunction2(ctx, image)

  };
  });
/*
function myFunction(context, img){
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
}

function myFunction2(context2, image){

  var x = 0;
  var y = 0;
  while (x<=image.width){
    while (y<=image.height){
      var imageData = context2.getImageData(x, y, 1, 1);
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
      list.push( "#" + r + g + b);
      y= y+1;
    }
    x=x+1;
    y=0;
  }

}
/*document.getElementById('image2').onload = function() {myFunction3()};
function myFunction3(img) {
  console.log(newlist)
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
        } else {
          var color= list[n];
          ctx.fillStyle = color;
          ctx.fillRect(w, h, 1, 1);
        }

        n= n+1
        h=h+1
      }
      w= w+1
    }

}*/
