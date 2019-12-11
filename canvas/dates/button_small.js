var months= ["August", "September", "October", "November", "December"];

var day;
var month;
var year;

var june = [];
var july = [];
var aug = [];
var sept = [];
var oct = [];
var nov=[];
var dec= [];

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
     if(m==11){
       if(nov.includes(d)){}else{nov.push(d)}
     }
     if(m==12){
       if(dec.includes(d)){}else{dec.push(d)}
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
/*document.getElementById('June').onclick = function() {

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
  }};*/


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

    document.getElementById('November').onclick = function() {
        if (select.innerHTML!= null){select.innerHTML= "";}
          for (var i=0; i<nov.length; i++){
            var d_opt= document.createElement("button");
          d_opt.appendChild(document.createTextNode(nov[i]));
          d_opt.value="11/"+nov[i]+"/2019";
          d_opt.className= "day";
          d_opt.className += " btn";


          select.appendChild(d_opt);
        }};

        document.getElementById('December').onclick = function() {
            if (select.innerHTML!= null){select.innerHTML= "";}
              for (var i=0; i<nov.length; i++){
                var d_opt= document.createElement("button");
              d_opt.appendChild(document.createTextNode(dec[i]));
              d_opt.value="12/"+dec[i]+"/2019";
              d_opt.className= "day";
              d_opt.className += " btn";


              select.appendChild(d_opt);
            }};


// draw to canvas

document.body.addEventListener('click', function (evt) {

    if (evt.target.className === 'day btn') {
        var date= evt.target.value;
        var current2 = document.getElementsByClassName("active");

        // If there's no active class
        if (current2.length > 1) {
          current2[1].className = current2[1].className.replace("active", "");
        }

        // Add the active class to the current/clicked button


          evt.target.className += " active";


        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var x=15;
        var y=15;
        var width=750;
        var height= 500;
        var w= 10;
        var h=10;

        var text= document.getElementById("text");
        text.innerHTML = '';
        text.appendChild(document.createTextNode(date));
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
            var up= json[i].up;
            var comp=json[i].comp;

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
                  else if (morning=="bad-okay-good"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if (morning=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
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
                  }else if (middle=="okay-good"){
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
                  else if (middle=="good-okay-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if(middle="good-okay-bad"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,107,107 )";
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
                  } else if (night=="okay-good-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,84,800);
                    x_f=x_f+84;
                  }else if (night=="good-okay-okay"){
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
                  }else if(night="bad-okay-bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,83,800);
                    x_f=x_f+83;
                    ctx.fillStyle= "rgb(255,230,109 )";
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
              ctx.fillRect((pressure-990)*18,height-75,40,40);

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
          if (color== "plaid"){
            ctx.fillStyle= "#055e2a";
            ctx.fillRect(0,480,750,5);
            ctx.fillStyle= "#ffffff";
            ctx.fillRect(0,485,750,2);
            ctx.fillStyle= "#0d0142";
            ctx.fillRect(0,487,750,5);
            ctx.fillStyle= "#055e2a";
            ctx.fillRect(0,492,750,8);
          }

          // up
          if (up != undefined){
          up= up.toString();
          up=up.split(",");
          for(var u=0; u< up.length; u++){
            var h_min= up[u].split(":");
            var hour= Number(h_min[0]);
            var min= Number(h_min[1]);

            var count= 0;
            if (hour== 11){
              count= count+0;
            }
            if (hour== 12){
              count= count+60;
            }
            if (hour== 1){
              count= count+120;
            }
            if (hour== 2){
              count= count+180;
            }
            if (hour== 3){
              count= count+240;
            }
            if (hour== 4){
              count= count+300;
            }
            if (hour== 5){
              count= count+360;
            }
            if (hour== 6){
              count= count+420;
            }

            count= count+ min;


            ctx.fillStyle= '#ffffff';
            ctx.fillRect(width*(count/480), 0, 5, height)



        }

          }
        }

        // comp use
        if(comp > 0){
              ctx.fillStyle = "#68A1C1";
              ctx.fillRect((comp)*2,height-250,60,20);

            }


          break;
            }
            }


            }




    });


// make month red
  var btnContainer = document.getElementById("buttons");

    var btns = btnContainer.getElementsByClassName('btn');

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


/**/
