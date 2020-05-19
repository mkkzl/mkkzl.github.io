
function clear(){
  $( ".slides" ).empty();

}
function timepassing(){
  for( var i=1; i<=76; i++){
 var divframe= document.createElement("div");
 divframe.className= "mySlides";

 var image= document.createElement("img");
 image.src= "timepassing/timepassing"+i+".png";
 // image.style.width= 100%;
 divframe.appendChild(image);

 document.getElementById("divframe").appendChild( divframe);
}
}

function purchistories(){
  for( var i=1; i<=5; i++){
 var divframe= document.createElement("div");
 divframe.className= "mySlides";
 var image= document.createElement("img");
 image.src= "purchistories/purchistories"+i+".png";

 divframe.appendChild(image);
 document.getElementById("divframe").appendChild(divframe);
}

}
function openModal() {
document.getElementById("myModal").style.display = "block";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
clear();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
//var dots = document.getElementsByClassName("demo");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
slides[slideIndex-1].style.display = "block";

//dots[slideIndex-1].className += " active";
}

function zoomin() {
  var myImg = document.getElementById("divframe");
  var currWidth = myImg.clientWidth;
  if (currWidth == 2500) return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomout() {
  var myImg = document.getElementById("divframe");
  var currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}
