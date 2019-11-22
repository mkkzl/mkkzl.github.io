window.addEventListener("load", function () {
  var result= false;
  var click= 1;

  var buttons= document.getElementById("buttons");
  var y_label= document.createElement("label");
  var y_button= document.createElement("input");
  y_button.type= "radio";
  y_button.id= "yes";
  y_button.value= "yes";


  y_label.appendChild(y_button);
  y_label.innerHTML += "Yes"

  buttons.appendChild(y_label);

  linebreak= document.createElement("br");

  buttons.appendChild(linebreak);

  var n_label= document.createElement("label");
  var n_button= document.createElement("input");
  n_button.type= "radio";
  n_button.id= "no";
  n_button.value= "no";
  n_button.innerHTML= "No"

  n_label.appendChild(n_button);
  n_label.innerHTML+= "No"
  buttons.appendChild(n_label);



  var question= document.getElementById("question");
  question.innerHTML = 'Question ' + click;
  question.value= click;

  var yes= document.getElementById("yes");
  var no= document.getElementById("no");

  if(question.value<= 10){
    if(question.value == 6 || 9){
      yes.onclick= function() {
      result= true;
      click= click +1;
      question.innerHTML = 'Question '+ click;
      question.value= click;
        };
      no.onclick= function() {
          click= click +1;
          question.innerHTML = 'Question '+ click;
          question.value= click;
            };
    }
    else{
    yes.onclick= function() {
    click= click +1;
    question.innerHTML = 'Question '+ click;
    question.value= click;
      };
    no.onclick= function() {
        click= click +1;
        question.innerHTML = 'Question '+ click;
        question.value= click;
          };
        }
      console.log(question.value);

}

  else {
    if(result== true){
    question.innerHTML="You got a result of true";}
    else{
      question.innerHTML="You got a result of false";
    }

  }


});
