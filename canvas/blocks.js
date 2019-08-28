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

  var canvas = document.getElementById('newimage');
  var ctx = canvas.getContext('2d');
  canvas.width= canvasimage.width;
  canvas.height= canvasimage.height;
  var rectnum= Math.floor(Math.random() * 15) + 1;
  //console.log(rectnum)
  while (rectnum > 0){
    var x= Math.floor(Math.random() * img.width) + 1;
    var y= Math.floor(Math.random() * img.height) + 1;
    var w= Math.floor(Math.random() * (img.width-x)) + 1;
    var h= Math.floor(Math.random() * (img.height-y)) + 1;
    //console.log(x,y,w,h)
    ctx.fillStyle= '#000000'
    rectnum= rectnum-1
    ctx.fillRect(x,y,w,h)
  }


};
  });
