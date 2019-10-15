$.getJSON("test.json", function(json){
  var canvas = document.getElementById("calCanvas");
  var ctx = canvas.getContext("2d");
  var y_f=0;
  var x_f= 800;
  var width=1400;
  var height= 1200;
  canvas.width= width;
  canvas.height= height;
  for(var i=0; i<json.length; i++){
    var morning= json[i].morning;
    var middle= json[i].middle;
    var night= json[i].night;
    console.log(morning);
    if (x_f < 1001){
              if (morning=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (morning=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (morning=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (morning=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  } else if (morning=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }
                  else if (morning=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);

                  } else if (morning=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }




                  if (middle=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);

                } else if (middle=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (middle=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (middle=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  } else if (middle=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  } else if (middle=="okay-good-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  } else if (middle=="good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  } else if (middle=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (middle=="okay-good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (middle=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }
                  if(middle=="bad-bad-okay"){
                  ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if(middle=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);

                  }




                  if (night=="bad"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                } else if (night=="okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (night=="good"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/3),200);
                    x_f=x_f+(200/3);
                  } else if (night=="bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }
                  else if (night=="okay-okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  } else if (night=="okay-good"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }else if (night=="good-okay-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (night=="okay-bad-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (night=="bad-bad-okay"){
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (night=="okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }
                  else if(night=="okay-okay-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  } else if(night=="okay-good-okay"){

                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if(night=="good-okay-good"){
                     ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }
                  else if (night=="good-good-okay"){
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);

                  }else if(night=="okay-bad-bad"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                    ctx.fillStyle= "rgb(255,107,107 )";
                    ctx.fillRect(x_f,y_f,(200/9),200);
                    x_f=x_f+(200/9);
                  }else if (night=="good-okay"){
                    ctx.fillStyle= "rgb(255,230,109 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                    ctx.fillStyle= "rgb(161,204,165 )";
                    ctx.fillRect(x_f,y_f,(200/6),200);
                    x_f=x_f+(200/6);
                  }

                  if(night == "" && morning == "" && middle == ""){
                    ctx.fillStyle= "#cccccc";
                    ctx.fillRect(x_f,y_f,200,200);
                    x_f=x_f+200;

                  }
                }

              else {
                y_f= y_f+200;
                x_f=0;
              }
}
}, false);
