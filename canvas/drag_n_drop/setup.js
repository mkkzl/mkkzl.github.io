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
