
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
        var image= document.getElementById("div1");
        var elements = image.childNodes.length;
        for(index = 0; index < elements; index++){
              node = image.childNodes[index];
              if (node && node.nodeType == 1 && node.nodeName == 'IMG'){
              var id_name= node.id;
              if(id_name== "drag1"){
                console.log("success");
              }
              else{console.log(id_name);}
              }
            }
    }


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("drag1");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
