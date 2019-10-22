var months= ["June", "July", "August", "September", "October"];

var day;
var month;
var year;

var june = [];
var july = [];
var aug = [];
var sept = [];
var oct = [];

var hm= new Object();
$.getJSON("data.json", function(json){


// generate month lists
for (var i = 0; i<json.length; i++){
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
    if(m_number>=10 && date.length==9){
      var d= date.charAt(3);
    }else if (m_number>=10 && date.length==10) {
      var d= date.charAt(3)+date.charAt(4);

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
     if (m==10){
       if(oct.includes(d)){}else{oct.push(d)}
     }
}


// make month buttons
  for( var i=0; i<months.length; i++){
    var option= document.createElement("button");

    option.appendChild(document.createTextNode(months[i]));
    option.value= months[i];
    option.className="btn";
    option.id= months[i];
    option.href="/"+months[i]+"/index.html";



    document.getElementById("buttons").appendChild(option);

  }






var select = document.getElementById("date");




// make day buttons
document.getElementById('June').onclick = function() {

        if (select.innerHTML!= null){select.innerHTML= "";}
          for (var i=0; i<june.length; i++){
          var d_opt= document.createElement("button");
          d_opt.appendChild(document.createTextNode(june[i]));
          d_opt.value="6/"+june[i]+"/2019";
          d_opt.className= "day";
          d_opt.className += " btn";

          select.appendChild(d_opt);



        }};

document.getElementById('July').onclick = function() {
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<july.length; i++){
      var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(july[i]));
      d_opt.value="7/"+july[i]+"/2019"
      d_opt.className= "day";
      d_opt.className += " btn";

    select.appendChild(d_opt);
  }};


document.getElementById('August').onclick = function() {
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<aug.length; i++){
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(aug[i]));
      d_opt.value="8/"+aug[i]+"/2019"
      d_opt.className= "day";
      d_opt.className += " btn";

    select.appendChild(d_opt);
  }};


document.getElementById('September').onclick = function() {
  if (select.innerHTML!= null){select.innerHTML= "";}
    for (var i=0; i<sept.length; i++){
      var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(sept[i]));
    d_opt.value="9/"+sept[i]+"/2019";
    d_opt.className= "day";
    d_opt.className += " btn";


    select.appendChild(d_opt);
  }};

document.getElementById('October').onclick = function() {
    if (select.innerHTML!= null){select.innerHTML= "";}
      for (var i=0; i<oct.length; i++){
        var d_opt= document.createElement("button");
      d_opt.appendChild(document.createTextNode(oct[i]));
      d_opt.value="10/"+oct[i]+"/2019";
      d_opt.className= "day";
      d_opt.className += " btn";


      select.appendChild(d_opt);
    }};


// draw to canvas

document.body.addEventListener('click', function (evt) {

    if (evt.target.className === 'day btn') {
        var date= evt.target.value;

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var x=15;
        var y=15;
        var width=750;
        var height= 500;
        var w= 10;
        var h=10;

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
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (morning=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (morning=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (morning=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  } else if (morning=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  } else if (morning=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }else if (morning=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }
                  else if (morning=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;

                  }




                  if (middle=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;

                } else if (middle=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (middle=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (middle=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  } else if (middle=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }else if (middle=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }else if (middle=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  } else if (middle=="okay-good-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  } else if (middle=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if (middle=="okay-good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if(middle=="bad-bad-okay"){
                  ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if(middle=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;

                  }




                  if (night=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;


                } else if (night=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (night=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,250,800);
                    x_f=x_f+250;
                  } else if (night=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  } else if (night=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }
                  else if (night=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,125,800);
                    x_f=x_f+125;
                  }
                  else if (night=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  } else if (night=="good-okay-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if (night=="okay-bad-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if (night=="bad-bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if(night=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  } else if(night=="okay-good-okay"){

                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if(night=="good-okay-good"){
                     ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }
                  else if (night=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;

                  }else if(night=="okay-bad-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }

                  if(night == "" && morning == "" && middle == ""){
                    ctx.fillStyle= "#cccccc";
                    ctx.fillRect(x_f,y_f,750,800);
                    x_f=x_f+750;

                  }
              x_f=0;

              // high and low
                ctx.fillStyle= "#4ECDC4";
                ctx.beginPath();
                ctx.arc((10+high), (canvas.height-150-high), high, 0, 2 * Math.PI);
                ctx.fill();
                ctx.strokeStyle= "#385F71";
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.arc((10+low), (canvas.height-150-low), low, 0, 2 * Math.PI);
                ctx.stroke();



        // messages
              for(var n=1; n<message; n++){
              if(x< width-w){
                ctx.fillStyle = "rgb(41,47,54 )";
                ctx.beginPath();
                ctx.arc(x, y, w/2, 0, 2 * Math.PI);
                ctx.fill();
                //ctx.fillRect(x,y,w,h);
                x= x+15;}
                else{
                  x=15;
                  y= y+15;
                  ctx.fillStyle = "rgb(41,47,54 )";
                  ctx.beginPath();
                  ctx.arc(x, y, w/2, 0, 2 * Math.PI);
                  ctx.fill();
                  x= x+15;

              }

              }



        //pressure and humidity
        if(pressure > 0){
              ctx.fillStyle = "#561F37";
              ctx.fillRect((pressure-1000)*20,height-75,40,40);

            }

        if (humidity > 0){

              ctx.fillStyle = "#ffffff";
              ctx.beginPath();
              ctx.moveTo(humidity*500, 60);
              ctx.lineTo((humidity*500-40), 120);
              ctx.lineTo((humidity*500+40), 120);
              ctx.fill();}
        if(cats>0){
          while(cats>0){
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(625, 240+(cats*50));
            ctx.lineTo(675, 280+(cats*50));
            ctx.lineTo(675, 200+(cats*50));
            ctx.lineTo(625, 240+(cats*50))
            ctx.stroke();
            cats=cats-1;

          }
          }
          if(color!= null){
            if(color== "black"){
              ctx.fillStyle= "#000000";
              ctx.fillRect(0,480,750,20);
            }
            if(color== "grey"){
              ctx.fillStyle= "#9d9d9e";
              ctx.fillRect(0,480,750,20);
            }
            if(color== "navy"){
              ctx.fillStyle= "#092654";
              ctx.fillRect(0,480,750,20);
            }
          if(color== "grey stripe"){
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,480,750,7);
            ctx.fillStyle= "#0a8505";
            ctx.fillRect(0,487,750,6);
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,493,750,7);
          }
          if(color== "teal"){
            ctx.fillStyle= "#77e6e6";
            ctx.fillRect(0,480,750,20);
          }
          if(color== "pink"){
            ctx.fillStyle= "#f0a3df";
            ctx.fillRect(0,480,750,20);
          }
          if(color== "striped"){
            ctx.fillStyle= "#81d4d0";
            ctx.fillRect(0,480,750,5);
            ctx.fillStyle= "#fafc79";
            ctx.fillRect(0,485,750,5);
            ctx.fillStyle= "#9d9d9e";
            ctx.fillRect(0,490,750,5);
            ctx.fillStyle= "#ff684a";
            ctx.fillRect(0,495,750,5);
          }
          if(color== "tan & black"){
            ctx.fillStyle= "#E7CAA7";
            ctx.fillRect(0,480,750,10);
            ctx.fillStyle= "#000000";
            ctx.fillRect(0,490,750,20);
          }
          if(color== "burgundy"){
            ctx.fillStyle= "#771E10";
            ctx.fillRect(0,480,750,20);
          }
          if(color== "tan"){
            ctx.fillStyle= "#E7CAA7";
            ctx.fillRect(0,480,750,20);
          }

          }
          break;
            }
            }



        }


    })
// make month red
  var btnContainer = document.getElementById("buttons");

    var btns = btnContainer.getElementsByClassName('btn');
    console.log(btns);
    console.log(btns.length);

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace("active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
      });
    }




}, false);

// make date red
    var dbtnContainer = document.getElementById("date");
    var el_dbtn= dbtnContainer.getElementsByTagName('button');
    var dbtns= dbtnContainer.getElementsByClassName('day');
    console.log(dbtns);
    console.log(dbtns.length);

      //var dbtns =

      // Loop through the buttons and add the active class to the current/clicked button
      for (var o = 0; o < 31; o++) {
        console.log("in for loop");
        dbtns[o].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");

          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }

          // Add the active class to the current/clicked button
          this.className += " active";
        });
      }
