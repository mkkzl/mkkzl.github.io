$(document).ready(function() {
  var n=101;
var boxes = document.getElementsByClassName("box");
var col=1;
for(var c=0; c< boxes.length; c++){
boxes.item(c).style.gridRow= 2;
boxes.item(c).style.gridColumn= col;
col= col+1;
}


var images = document.getElementsByTagName('img');
col= 1;
for (var b=0; b< images.length; b++){
images.item(b).style.gridRow= 3;
images.item(b).style.gridColumn= col;
col= col+1;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var button = document.getElementById("submit");
var frames = document.getElementsByClassName("box");

function checkAnswers(){

      for(var i = 0; i < frames.length; i++)
      {
        var accept= parseFloat(frames.item(i).id);
         var elements= frames.item(i).childNodes.length;
         for(index = 0; index < elements; index++){
              node = frames.item(i).childNodes[index];
              if (node && node.nodeType == 1 && node.nodeName == 'IMG'){
                var target= parseFloat(node.id);
              }

              if (target == (accept-100)){

              }
              else{
                var incorrect=document.getElementById(target+'i');
                incorrect.style.filter= "grayscale(90%)";
                var correct=document.getElementById((accept-100)+'i');
                frames.item(i).style.height= "220px";
                frames.item(i).appendChild(correct);
              }
      }


    }

}});
/*// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByTagName("img");
var modalImg = document.getElementById("modal");

for(var im=0; im<imgs.length; im++){
  if(imgs[im].id.includes('i')){
    imgs[im].onclick = function(){
      console.log(imgs[im]);
      var width= imgs[im].src.naturalWidth;
      var height= imgs[im].src.naturalHeight;
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.style.width=(width);
      modalImg.style.height= (height);
    }
  }

}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}*/
