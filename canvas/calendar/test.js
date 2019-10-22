$.getJSON("data.json", function(json){
  // draw to canvas
  var canvas = document.getElementById("september");
  var ctx = canvas.getContext("2d");

  var y_f=0;
  var x_f= 0;
  var x=1;
  var y=1;
  var w=0;
  var h=0;
  var t=0;
  var l=0;
  var width=1296;
  var height= 810;

  canvas.width= width;
  canvas.height= height;


  // gather json variables
  for (var i = 0; i<json.length; i++){

      var message = json[i].message_count;
      var j_date = json[i].date;
      var morning= json[i].morning;
      var middle= json[i].middle;
      var night= json[i].night;
      var month= j_date[0]+j_date[1];
      var date= j_date[2]+j_date[3];
      var high= json[i].high;
      var low= json[i].low;
      var pressure= json[i].pressure;
      var humidity= json[i].humidity;
      var cats= json[i].cats;
      var color= json[i].color;


  if (month=='9/'){

    if (l > 1133){t= t+162;
      l=0;}
      if(color!= null){
        if(color== "black"){
          ctx.fillStyle= "#000000";
          ctx.fillRect(l,t+142,162,10);
        }
        if(color== "grey"){
          ctx.fillStyle= "#9d9d9e";
          ctx.fillRect(l,t+142,162,10);;
        }
        if(color== "navy"){
          ctx.fillStyle= "#092654";
          ctx.fillRect(l,t+142,162,10);
        }
      if(color== "grey stripe"){
        ctx.fillStyle= "#9d9d9e";
        ctx.fillRect(l,t+142,162,4);
        ctx.fillStyle= "#0a8505";
        ctx.fillRect(l,t+149,162,3);
        ctx.fillStyle= "#9d9d9e";
        ctx.fillRect(l,t+155,162,3);
      }
      if(color== "teal"){
        ctx.fillStyle= "#77e6e6";
        ctx.fillRect(l,t+142,162,10);
      }
      if(color== "pink"){
        ctx.fillStyle= "#f0a3df";
        ctx.fillRect(l,t+142,162,10);
      }
      if(color== "striped"){
        ctx.fillStyle= "#81d4d0";
        ctx.fillRect(l,t+142,162,2);
        ctx.fillStyle= "#fafc79";
        ctx.fillRect(l,t+147,162,3);
        ctx.fillStyle= "#9d9d9e";
        ctx.fillRect(l,t+152,162,2);
        ctx.fillStyle= "#ff684a";
        ctx.fillRect(l,t+157,162,3);
      }
      if(color== "tan & black"){
        ctx.fillStyle= "#E7CAA7";
        ctx.fillRect(l,t+142,162,5);
        ctx.fillStyle= "#000000";
        ctx.fillRect(l,t+152,162,5);
      }
      if(color== "burgundy"){
        ctx.fillStyle= "#771E10";
        ctx.fillRect(l,t+142,162,10);
      }
      if(color== "tan"){
        ctx.fillStyle= "#E7CAA7";
        ctx.fillRect(l,t+142,162,10);
      }

    }
l=l+162;

                    }
                  }
                    }, false);
