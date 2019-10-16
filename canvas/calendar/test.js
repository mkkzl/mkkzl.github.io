$.getJSON("data.json", function(json){
  // draw to canvas
  var canvas = document.getElementById("august");
  var ctx = canvas.getContext("2d");

  var y_f=0;
  var x_f= 648;
  var x=1;
  var y=1;
  var w=648;
  var h=0;
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
      var p_date;


  if (month=='8/'){


                if (x_f > 1133){y_f= y_f+162;
                  x_f=0;}

                 for(var n=1; n<message; n++){

                          if(x+w< w+160){


                            ctx.fillStyle = "rgb(41,47,54)";
                            ctx.beginPath();
                            ctx.arc(x+w, y+h, 1, 0, 2 * Math.PI);
                            ctx.fill();

                            x= x+3;
                            }
                            else{
                              x=1;
                              y= y+3;
                              ctx.fillStyle = "rgb(41,47,54)";
                              ctx.beginPath();
                              ctx.arc(x+w, y+h, 1, 0, 2 * Math.PI);
                              ctx.fill();
                              x= x+3;

                          }

                        }
                        if(w+162<1135){w=w+162;x=1;y=1;}
                        else{w=0; h=h+162;x=1;}


                    }
                  }
                    }, false);
