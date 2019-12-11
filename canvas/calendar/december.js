$.getJSON("data.json", function(json){

// draw to canvas

var canvas= document.getElementById("december");
var ctx = canvas.getContext("2d");
var y_f=0;
var x_f= 0;
var x=2;
var y=2;
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
            var date= j_date[3]+j_date[4];
            var high= json[i].high;
            var low= json[i].low;
            var pressure= json[i].pressure;
            var humidity= json[i].humidity;
            var high= json[i].high;
            var low= json[i].low;
            var cats= json[i].cats;
            var color= json[i].color;
            var up = json[i].up;
        // check date

        if (month=='12'){
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
              }else if (morning=="good-okay"){
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,27,162);
                x_f=x_f+27;
                ctx.fillStyle= "rgb(255,230,109 )";
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
                }else if (morning=="bad-okay-good"){
                ctx.fillStyle= "rgb(255,107,107 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
              }else if (morning=="okay-okay-bad"){
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,107,107 )";
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
              }else if (middle=="okay-good"){
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,27,162);
                x_f=x_f+27;
                ctx.fillStyle= "rgb(161,204,165 )";
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

              }else if (middle=="good-okay-okay"){
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
              }
              else if(middle="good-okay-bad"){
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(255,107,107 )";
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
              }else if (night=="okay-good-good"){
                ctx.fillStyle= "rgb(255,230,109 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
                ctx.fillStyle= "rgb(161,204,165 )";
                ctx.fillRect(x_f,y_f,18,162);
                x_f=x_f+18;
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
              else if(night="bad-okay-bad"){ctx.fillStyle= "rgb(255,107,107 )";
              ctx.fillRect(x_f,y_f,18,162);
              x_f=x_f+18;
              ctx.fillStyle= "rgb(255,230,109 )";
              ctx.fillRect(x_f,y_f,18,162);
              x_f=x_f+18;
              ctx.fillStyle= "rgb(255,107,107 )";
              ctx.fillRect(x_f,y_f,18,162);
              x_f=x_f+18;}

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

                if(color!= null){
                  if(color== "black"){
                    ctx.fillStyle= "#000000";
                    ctx.fillRect(l,t+152,162,10);
                  }
                  if(color== "grey"){
                    ctx.fillStyle= "#9d9d9e";
                    ctx.fillRect(l,t+152,162,10);;
                  }
                  if(color== "navy"){
                    ctx.fillStyle= "#092654";
                    ctx.fillRect(l,t+152,162,10);
                  }
                if(color== "grey stripe"){
                  ctx.fillStyle= "#9d9d9e";
                  ctx.fillRect(l,t+152,162,4);
                  ctx.fillStyle= "#0a8505";
                  ctx.fillRect(l,t+156,162,3);
                  ctx.fillStyle= "#9d9d9e";
                  ctx.fillRect(l,t+159,162,3);
                }
                if(color== "teal"){
                  ctx.fillStyle= "#77e6e6";
                  ctx.fillRect(l,t+152,162,10);
                }
                if(color== "pink"){
                  ctx.fillStyle= "#f0a3df";
                  ctx.fillRect(l,t+152,162,10);
                }
                if(color== "striped"){
                  ctx.fillStyle= "#81d4d0";
                  ctx.fillRect(l,t+152,162,2);
                  ctx.fillStyle= "#fafc79";
                  ctx.fillRect(l,t+154,162,3);
                  ctx.fillStyle= "#9d9d9e";
                  ctx.fillRect(l,t+157,162,2);
                  ctx.fillStyle= "#ff684a";
                  ctx.fillRect(l,t+159,162,3);
                }
                if(color== "tan & black"){
                  ctx.fillStyle= "#E7CAA7";
                  ctx.fillRect(l,t+152,162,5);
                  ctx.fillStyle= "#000000";
                  ctx.fillRect(l,t+152,162,5);
                }
                if(color== "burgundy"){
                  ctx.fillStyle= "#771E10";
                  ctx.fillRect(l,t+152,162,10);
                }
                if(color== "tan"){
                  ctx.fillStyle= "#E7CAA7";
                  ctx.fillRect(l,t+152,162,10);
                }
                if (color== "plaid"){
                  ctx.fillStyle= "#055e2a";
                  ctx.fillRect(l,t+152,162,3);
                  ctx.fillStyle= "#ffffff";
                  ctx.fillRect(l,t+155,162,1);
                  ctx.fillStyle= "#0d0142";
                  ctx.fillRect(l,t+156,162,2);
                  ctx.fillStyle= "#055e2a";
                  ctx.fillRect(l,t+158,162,4);
                }

              }






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
                           ctx.fillRect(l+(pressure-990)*4.5,t+125,10,10);
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
                               ctx.fillRect(l+ 162*(count/480), t, 3, 162)



                           }

                             }

                l=l+162;
            }

          }

            }, false);
