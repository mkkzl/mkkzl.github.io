function click(){
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByTagName("a");
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
}
}
