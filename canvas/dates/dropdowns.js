var months= ["June", "July", "August", "September"];

var day;
var month;
var year;

var june = [];
var july = [];
var aug = [];
var sept = [];

var hm= new Object();
$.getJSON("message_1.json", function(json){




//var parse = json.parse(json);
var messages= json.messages;


for (var i = 0; i<messages.length; i++){
    var message = messages[i];
    var timestamp = message.timestamp_ms;
    var content= message.content;

     var time = new Date(timestamp);

     var d= time.getDate();
     var m= time.getMonth()+1;
     var y1= time.getFullYear();
    // var date= str(d);
    // var month= str(m+1);
    // var year= str(y1+1900);
     var day = m+'/'+ d + '/' + y1;

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



 //var hm = {};
 var p= hm[day];
 if(p== null) {hm[day]= 1;}
 else {hm[day]= hm[day]+1;}
}

//console.log(hm);



  for( var i=0; i<months.length; i++){
    var option= document.createElement("option");

    option.appendChild(document.createTextNode(months[i]));
    option.value= months[i];

    var element = document.getElementById("months");
    element.appendChild(option);

  }












  var select = document.getElementById("months");
  var selected;

  /*var opt;
        for ( var i = 0, len = select.options.length; i < len; i++ ) {
            opt = select.options[i];
            if ( opt.selected === true ) {
                selected= String(opt.value);
            }}*/

  if (selected=="June"){
    for (var i=0; i<june.length; i++)
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(june[i]));
    d_opt.value=june[i];
    d_opt.onclick="window.location='"+"June/"+june[i]+".html';"

    var list = document.getElementById("date");
    date.appendChild(d_opt);

  }else if (selected =="July"){

    for (var i=0; i<july.length; i++)
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(july[i]));
    d_opt.value=july[i];
    d_opt.href="July/"+july[i]+".html"

    var list = document.getElementById("date");
    date.appendChild(d_opt);
  }else if (selected=="August"){
    for (var i=0; i<aug.length; i++)
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(aug[i]));
    d_opt.value=aug[i];
      d_opt.href="August/"+aug[i]+".html"

    var list = document.getElementById("date");
    date.appendChild(d_opt);
  }else if (selected=="September"){
    for (var i=0; i<sept.length; i++)
    var d_opt= document.createElement("button");
    d_opt.appendChild(document.createTextNode(sept[i]));
    d_opt.value=sept[i];
      d_opt.href="September/"+sept[i]+".html"

    var list = document.getElementById("date");
    date.appendChild(d_opt);
  }


})
