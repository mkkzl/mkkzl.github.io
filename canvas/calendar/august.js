
$.getJSON("data.json", function(json){

// draw to canvas
var canvas = document.getElementById("august");
var ctx = canvas.getContext("2d");

var y_f=0;
var x_f= 648;
var width=1134;
var height= 810;
canvas.width= width;
canvas.height= height;


        // gather json variables
        for (var i = 0; i<json.length; i++){

          //  var message = json[i].message_count;
            var j_date = json[i].date;
            var morning= json[i].morning;
            var middle= json[i].middle;
            var night= json[i].night;
            var month= j_date[0]+j_date[1];
          /*  var pressure= json[i].pressure;
            var humidity= json[i].humidity;
            var high= json[i].high;
            var low= json[i].low;
            var cats= json[i].cats;
            var color= json[i].color;*/
        // check date


if (month=='8/'){
              if (x_f < 1134){

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
                  } else if (morning=="okay-okay-good"){
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

                  } else if (morning=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
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
                  } else if (middle=="okay-okay-good"){
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
                  } else if (middle=="good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
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
                  }else if (middle=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                  }
                  if(middle=="bad-bad-okay"){
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
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(161,204,165 )";
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
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                  }else if (night=="good-okay-okay"){
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
                    x_f=x_f+18;
                  }else if (night=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                  }
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
                  }else if (night=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,27,162);
                    x_f=x_f+27;
                  }

                  if(night == "" && morning == "" && middle == ""){
                    ctx.fillStyle= "#cccccc";
                    ctx.fillRect(x_f,y_f,162,162);
                    x_f=x_f+162;

                  }




          }
          else {
            y_f= y_f+162;
            x_f=0;
          }
}

}

}, false);




/*

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
              for(var i=1; i<message; i++){
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
              console.log("pressure");
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
            ctx.lineTo(675, 162+(cats*50));
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

        } */
