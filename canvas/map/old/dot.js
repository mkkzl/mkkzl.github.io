var dots = document.getElementsByClassName('dot');
for(var d; d<dots.length; d++){

var clicked_id=dots[d].id;

//function showData(clicked_id, clicked_src){
dots[d].onclick= function() {
  $.getJSON("map.json", function(json){
    for (var i = 0; i<json.length; i++){
      var id= json[i].id;
      var date= json[i].date;
      var rate= json[i].rate;
      var position= json[i].position;
      var image= json[i].image;

      if(id==clicked_id){
        var date_place= document.getElementById('date');
        var rate_place= document.getElementById('rate');
        var position_place= document.getElementById('postition');
        var image_place= document.getElementById('day_image');

        date_place.appendChild(document.createTextNode('Date: ',date));
        rate_place.appendChild(document.createTextNode('Rate: ',rate));
        position_place.appendChild(document.createTextNode('Position: ',position));
        image_place.src= image;
      }

}
});
}
}
