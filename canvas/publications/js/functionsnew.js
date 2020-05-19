  var zoom = 1;
  $(".in").on('click',function() {
			zoom += 0.1;
			$('.mySlides').css('zoom', zoom);
      $('#divframe').css('zoom', zoom);
      console.log(zoom);
		}
  );

  $(".out").on('click',function() {
  			zoom -= 0.1;
        $('.mySlides').css('zoom', zoom);
        $('#divframe').css('zoom', zoom);
        console.log(zoom);
  		});

function clear(){

  console.log("empty");
}

function timepassing(){
  for( var i=1; i<=76; i++){
 var divframe= document.createElement("div");
 divframe.className= "mySlides";

 var image= document.createElement("img");
 image.src= "timepassing/timepassing"+i+".png";
 image.style.height= "90vmin";
 image.className="image";
 divframe.appendChild(image);

 document.getElementById("divframe").appendChild( divframe);
 document.getElementById("divframe").style.background= "";
}
}

function purchistories(){
  for( var i=1; i<=5; i++){
 var divframe= document.createElement("div");
 divframe.className= "mySlides";
 var image= document.createElement("img");
 image.src= "purchistories/purchistories"+i+".png";
image.style.height= "90vmin";
image.className="image";
 divframe.appendChild(image);
 document.getElementById("divframe").appendChild(divframe);
  document.getElementById("divframe").style.background= "#fefefe";
}
}

function openModal() {
 document.getElementById("myModal").style.display = "block";
}

function closeModal() {
 document.getElementById("myModal").style.display = "none";
 $( ".slides" ).empty();
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
