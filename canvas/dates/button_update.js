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
        var x=25;
        var y=25;
        var width=1500;
        var height= 1000;
        var w= 20;
        var h=20;

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
            var cats= json[i].cats;
            var color= json[i].color;

        // check date
            if(date == j_date){

              canvas.width= width;
              canvas.height= height;
              var y_f=0;
              var x_f= 0;

              if (morning=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (morning=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (morning=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (morning=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (morning=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }
                  else if (morning=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;

                  } else if (morning=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }




                  if (middle=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;

                } else if (middle=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (middle=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (middle=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (middle=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  } else if (middle=="okay-good-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  } else if (middle=="good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (middle=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (middle=="okay-good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (middle=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }
                  if(middle=="bad-bad-okay"){
                  ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if(middle=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;

                  }




                  if (night=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;

                } else if (night=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (night=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,500,800);
                    x_f=x_f+500;
                  } else if (night=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }
                  else if (night=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }else if (night=="good-okay-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (night=="okay-bad-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (night=="bad-bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (night=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }
                  else if(night=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  } else if(night=="okay-good-okay"){

                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if(night=="good-okay-good"){
                     ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }
                  else if (night=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;

                  }else if(night=="okay-bad-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,166,800);
                    x_f=x_f+166;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,167,800);
                    x_f=x_f+167;
                  }else if (night=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  }
              x_f=0;



        // messages
              for(var i=0; i<message+1; i++){
              if(x< width-w){
                ctx.fillStyle = "rgb(41,47,54 )";
                ctx.beginPath();
                ctx.arc(x, y, w/2, 0, 2 * Math.PI);
                ctx.fill();
                //ctx.fillRect(x,y,w,h);
                x= x+25;}
                else{
                  x=25;
                  y= y+25;
                  ctx.fillStyle = "rgb(41,47,54 )";
                  ctx.beginPath();
                  ctx.arc(x, y, w/2, 0, 2 * Math.PI);
                  ctx.fill();
                  x= x+25;

              }

              }


            // high and low
              ctx.fillStyle= "#4ECDC4";
              ctx.beginPath();
              ctx.arc((10+high), (canvas.height-325-high), high, 0, 2 * Math.PI);
              ctx.fill();
              ctx.strokeStyle= "#385F71";
              ctx.lineWidth = 5;
              ctx.beginPath();
              ctx.arc((10+low), (canvas.height-325-low), low, 0, 2 * Math.PI);
              ctx.stroke();

        //pressure and humidity
        if(pressure > 0){
              ctx.fillStyle = "#561F37";
              ctx.fillRect(pressure,height-350,80,80);}

        if (humidity > 0){

              ctx.fillStyle = "#ffffff";
              ctx.beginPath();
              ctx.moveTo(humidity*1000, 60);
              ctx.lineTo((humidity*1000-40), 120);
              ctx.lineTo((humidity*1000+40), 120);
              ctx.fill();}
        if(cats>0){
          console.log("cats="+cats);
          while(cats>0){
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(500, 240+(cats*50));
            ctx.lineTo(550, 280+(cats*50));
            ctx.lineTo(550, 200+(cats*50));
            ctx.lineTo(500, 240+(cats*50))
            ctx.stroke();
            cats=cats-1;

          }
          }
          if(color!= null){
            if(color== "black"){
              ctx.fillStyle= "#000000";
              ctx.fillRect(0,780,1500,20);
            }
            if(color== "grey"){
              ctx.fillStyle= "#9d9d9e";
              ctx.fillRect(0,780,1500,20);
            }
            if(color== "navy"){
              ctx.fillStyle= "#092654";
              ctx.fillRect(0,780,1500,20);
            }
          if(color== "grey stripe"){
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,780,1500,7);
            ctx.fillStyle= "#0a8505";
            ctx.fillRect(0,787,1500,6);
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,793,1500,7);
          }
          if(color== "teal"){
            ctx.fillStyle= "#77e6e6";
            ctx.fillRect(0,780,1500,20);
          }
          if(color== "pink"){
            ctx.fillStyle= "#f0a3df";
            ctx.fillRect(0,780,1500,20);
          }
          if(color== "striped"){
            ctx.fillStyle= "#81d4d0";
            ctx.fillRect(0,780,1500,5);
            ctx.fillStyle= "#fafc79";
            ctx.fillRect(0,785,1500,5);
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,790,1500,5);
            ctx.fillStyle= "#ff684a";
            ctx.fillRect(0,795,1500,5);
          }


          }

            }
            }



        }


    })
}, false);
