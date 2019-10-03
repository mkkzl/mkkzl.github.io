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






document.getElementById('June').onclick= function(){

    for (var i=0; i<june.length; i++){
    var d_opt= document.createElement("a");
    d_opt.appendChild(document.createTextNode(june[i]));
    d_opt.value=june[i];
    d_opt.href="6/"+june[i]+".html"

    select.appendChild(d_opt);



  }};





document.getElementById('July').onclick= function(){
  /*var i;
    for(i = select.options.length - 1 ; i >= 0 ; i--)
    {
        select.remove(i);
    }*/
    for (var i=0; i<july.length; i++){
      var d_opt= document.createElement("a");
    d_opt.appendChild(document.createTextNode(july[i]));
    d_opt.value=july[i];
      d_opt.href="7/"+july[i]+".html"

    select.appendChild(d_opt);
  }};


document.getElementById('August').onclick= function(){

    for (var i=0; i<aug.length; i++){
    var d_opt= document.createElement("a");
    d_opt.appendChild(document.createTextNode(aug[i]));
    d_opt.value=aug[i];
      d_opt.href="8/"+aug[i]+".html"

    select.appendChild(d_opt);
  }};


document.getElementById('September').onclick= function(){

    for (var i=0; i<sept.length; i++){
      var d_opt= document.createElement("a");
    d_opt.appendChild(document.createTextNode(sept[i]));
    d_opt.value=sept[i];
    d_opt.href="9/"+sept[i]+".html"


    select.appendChild(d_opt);
  }};

})
