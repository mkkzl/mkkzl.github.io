var months= ["June", "July", "August", "September"];

var day;
var month;
var year;

var june = [];
var july = [];
var aug = [];
var sept = [];

var hm= new Object();
$.getJSON("data.json", function(json){

for (var i = 0; i<json.length; i++){
    var message = json[i].message_count;
    var date = json[i].date;

    var m_l= date.charAt(1);
    if (m_l == '/'){
      var m= date.charAt(0);}
      else{var m= date.substr(0,2);}
    var m_number= parseInt(m);

    if (m_number<10 && date.length==8){
      var d= date.charAt(2);
    }else if (m_number<10 && date.length==9){
      var d= date.substr(2,2);
    }



     if(m== 6){
       if(june.includes(d)){}else{june.push(d)}
     }
     if(m== 7){
       if(july.includes(d)){}else{july.push(d)}
     }
     if(m== 8){
       if(aug.includes(d)){}else{aug.push(d)}
     }
     if(m== 9){
       if(sept.includes(d)){}else{sept.push(d)}
     }

}

// make month buttons
  for( var i=0; i<months.length; i++){
    var option= document.createElement("button");

    option.appendChild(document.createTextNode(months[i]));
    option.value= months[i];
    option.id= months[i];
    option.href="/"+months[i]+"/index.html";

    var element = document.getElementById("buttons");
    element.appendChild(option);

  }






var select = document.getElementById("date");




// make day buttons

document.getElementById('June').onclick= function(){
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<june.length; i++){
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(june[i]));
    d_opt.value="6/"+june[i]+"/2019";
    d_opt.className= "day";

    select.appendChild(d_opt);



  }};


document.getElementById('July').onclick= function(){
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<july.length; i++){
      var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(july[i]));
      d_opt.value="7/"+july[i]+"/2019"
      d_opt.className= "day";

    select.appendChild(d_opt);
  }};


document.getElementById('August').onclick= function(){
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<aug.length; i++){
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(aug[i]));
      d_opt.value="8/"+aug[i]+"/2019"
      d_opt.className= "day";

    select.appendChild(d_opt);
  }};


document.getElementById('September').onclick= function(){
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<sept.length; i++){
      var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(sept[i]));
    d_opt.value="9/"+sept[i]+"/2019";
    d_opt.className= "day";


    select.appendChild(d_opt);
  }};

// draw to canvas

document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'day') {
        var date= evt.target.value;

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var x=0;
        var y=0;
        var width=1000;
        var height= 1000;
        var w;
        var h;

        // gather json variables
        for (var i = 0; i<json.length; i++){
            var message = json[i].message_count;
            var j_date = json[i].date;
            var morning= json[i].morning;
            var middle= json[i].middle;
            var night= json[i].night;
            var pressure= json[i].pressure;
            var humidity= json[i].humidity;
            var high= json[i].high;
            var low= json[i].low;

        // check date
            if(date == j_date){
              w= width/message/2;
              canvas.width= message*(w*3);
              canvas.height= height;
              var y_f=0;
              var x_f= 0;

              if (morning=="bad"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (morning=="okay"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (morning=="good"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (morning=="bad-okay"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  } else if (morning=="okay-okay-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }
                  else if (morning=="good-good-okay"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);

                  } else if (morning=="okay-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  }




                  if (middle=="bad"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;

                } else if (middle=="okay"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (middle=="good"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (middle=="bad-okay"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  } else if (middle=="okay-okay-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  } else if (middle=="okay-good-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  } else if (middle=="good-okay"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  } else if (middle=="okay-okay-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if (middle=="okay-good-okay"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if (middle=="okay-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  }
                  if(middle=="bad-bad-okay"){
                  ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }




                  if (night=="bad"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;

                } else if (night=="okay"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (night=="good"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,500,666);
                    x_f=x_f+500;
                  } else if (night=="bad-okay"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  }
                  else if (night=="okay-okay-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  }else if (night=="good-okay-okay"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if (night=="okay-bad-okay"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if (night=="bad-bad-okay"){
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if (night=="okay-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,250,666);
                    x_f=x_f+250;
                  }
                  else if(night=="okay-okay-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  } else if(night=="okay-good-okay"){

                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }else if(night=="good-okay-good"){
                     ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }
                  else if (night=="good-good-okay"){
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#A1CCA5";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);

                  }else if(night=="okay-bad-bad"){
                    ctx.fillStyle= "#FFE66D";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                    ctx.fillStyle= "#FF6B6B";
                    ctx.fillRect(x_f,y_f,(500/3),666);
                    x_f=x_f+(500/3);
                  }
              x_f=0;



        // messages
              for(var i=0; i<message+1; i++){
              ctx.fillStyle = "#292F36";
              ctx.fillRect(x,y,w,height);
              x= x+(w*3);
              }


            // high and low
              ctx.fillStyle= "#4ECDC4";
              ctx.beginPath();
              ctx.arc((10+high), (canvas.height-300-high), high, 0, 2 * Math.PI);
              ctx.fill();
              ctx.fillStyle= "#385F71";
              ctx.beginPath();
              ctx.arc((10+low), (canvas.height-300-low), low, 0, 2 * Math.PI);
              ctx.fill();

        //pressure and humidity
        if(pressure > 0){
              ctx.fillStyle = "#FFE66D";
              ctx.fillRect(pressure,height-60,40,40);}

        if (humidity > 0){
              ctx.fillStyle = "#FF6B6B";
              ctx.beginPath();
              ctx.moveTo(humidity*1000, 60);
              ctx.lineTo((humidity*1000-40), 120);
              ctx.lineTo((humidity*1000+40), 120);
              ctx.fill();}


            }
            }



        }


    })
}, false);
