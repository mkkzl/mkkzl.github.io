window.addEventListener("DOMContentLoaded", function()
{
    var canvasimage = document.getElementById('image');
    var context = canvasimage.getContext('2d');
    make_base();

  function make_base()
      {
          base_image = new Image();
          base_image.onload = function()
          {
             // test that the image was loaded
             console.log('base_image');  // or console.log if you prefer
             context.drawImage(base_image, 0, 0);

          }
          base_image.src = 'IMG_5240.jpg';
      }

      var mouseClicked = false;
      document.addEventListener("click", onMouseClick, false);
  function onMouseClick(){
    context.drawImage(base_image, 0, 0);
    mouseClicked = !mouseClicked;

    var rectnum= Math.floor(Math.random() * 15) + 1;

    while (rectnum > 0){
      var x= Math.floor(Math.random() * 500) + 1;
      var y= Math.floor(Math.random() * 347) + 1;
      var w= Math.floor(Math.random() * (500-x)) + 1;
      var h= Math.floor(Math.random() * (347-y)) + 1;
      //console.log(x,y,w,h)
      context.fillStyle= '#000000'
      rectnum= rectnum-1
      context.fillRect(x,y,w,h)
    }
  }
  base_image.src = 'IMG_5240.jpg';

 });
