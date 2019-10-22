
$.getJSON("data.json", function(json){

// draw to canvas
var canvas = document.getElementById("august");
var ctx = canvas.getContext("2d");

var y_f=0;
var x_f= 648;
var x=2;
var y=2;
var w=648;
var h=0;
var t=0;
var l=648;
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



if (month=='8/'){
              if (x_f > 1133){  y_f= y_f+162;
                x_f=0;}

                if (morning=="bad"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (morning=="okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (morning=="good"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (morning=="bad-okay"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }  else if (morning=="okay-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }else if (morning=="okay-okay-good"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }
                    else if (morning=="good-good-okay"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
      }


                    if (middle=="bad"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;

                  } else if (middle=="okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (middle=="good"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (middle=="bad-okay"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    } else if (middle=="good-okay"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }else if (middle=="okay-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }else if (middle=="okay-okay-good"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    } else if (middle=="okay-good-good"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    } else if (middle=="okay-okay-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if (middle=="okay-good-okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if(middle=="bad-bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if(middle=="good-good-okay"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;

                    }




                    if (night=="bad"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                  } else if (night=="okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (night=="good"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,54,162);
                      x_f=x_f+54;
                    } else if (night=="bad-okay"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    } else if (night=="good-okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }else if (night=="okay-good"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }
                    else if (night=="okay-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,27,162);
                      x_f=x_f+27;
                    }
                    else if (night=="okay-okay-good"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    } else if (night=="good-okay-okay"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if (night=="okay-bad-okay"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if (night=="bad-bad-okay"){
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;}
                    else if(night=="okay-okay-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    } else if(night=="okay-good-okay"){

                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }else if(night=="good-okay-good"){
                       ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }
                    else if (night=="good-good-okay"){
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(161,204,165 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;

                    }else if(night=="okay-bad-bad"){
                      ctx.fillStyle= "rgb(255,230,109 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                      ctx.fillStyle= "rgb(255,107,107 )";
                      ctx.fillRect(x_f,y_f,18,162);
                      x_f=x_f+18;
                    }

                    if(night == "" && morning == "" && middle == ""){
                      ctx.fillStyle= "#cccccc";
                      ctx.fillRect(x_f,y_f,162,162);
                      x_f=x_f+162;

                    }




                  // high and low
                  if (l > 1133){t= t+162;
                    l=0;}

                    ctx.fillStyle= "#4ECDC4";
                    ctx.beginPath();
                    ctx.arc((l+10+high/3), (t+40+high/3), high/3, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.strokeStyle= "#385F71";
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc((l+10+low/3), (t+40+low/3), low/3, 0, 2 * Math.PI);
                    ctx.stroke();




                  //messages
                  for(var n=1; n<message; n++){

                           if(x+w< w+160){


                             ctx.fillStyle = "rgb(41,47,54)";
                             ctx.beginPath();
                             ctx.arc(x+w, y+h, 1, 0, 2 * Math.PI);
                             ctx.fill();

                             x= x+4;
                             }
                             else{
                               x=2;
                               y= y+4;
                               ctx.fillStyle = "rgb(41,47,54)";
                               ctx.beginPath();
                               ctx.arc(x+w, y+h, 1, 0, 2 * Math.PI);
                               ctx.fill();
                               x= x+4;

                           }

                         }
                         if(w+162<1134){w=w+162;x=2;y=2;}
                         else{w=0; h=h+162;x=2;y=2;}


                         //pressure and humidity
                         if(pressure > 0){
                               ctx.fillStyle = "#561F37";
                               ctx.fillRect(l+(pressure-1000)*5,t+125,10,10);
                             }

                         if (humidity > 0){

                               ctx.fillStyle = "#ffffff";
                               ctx.beginPath();
                               ctx.moveTo(l+humidity*135, t+20);
                               ctx.lineTo(l+humidity*135-10, t+40);
                               ctx.lineTo(l+humidity*135+10, t+40);
                               ctx.fill();}

                         if(cats>0){
                                 while(cats>0){
                                   ctx.strokeStyle = "#ffffff";
                                   ctx.beginPath();
                                   ctx.moveTo(l+125, t+80+(cats*15));
                                   ctx.lineTo(l+150, t+70+(cats*15));
                                   ctx.lineTo(l+150, t+90+(cats*15));
                                   ctx.lineTo(l+125, t+80+(cats*15))
                                   ctx.stroke();
                                   cats=cats-1;

                                 }
                                 }

                         l=l+162;



}

}

}, false);
