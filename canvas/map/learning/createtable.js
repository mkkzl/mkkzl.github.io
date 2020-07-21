var tablecontainer= document.getElementById('table');
body.onload = function myFunction(){


    var article= document.createElement("article");
    var table= article.appendChild(document.createElement("table"));
    var tbody= table.appendChild(document.createElement("tbody"));
    var trdate= tbody.appendChild(document.createElement("tr"));
    trdate.appendChild(document.createElement("td").createTextNode("Date"));
    trdate.appendChild(document.createElement("td").createTextNode("10.2"));
    var trrate= tbody.appendChild(document.createElement("tr"));
    trrate.appendChild(document.createElement("td").createTextNode("Rate"));
    trrate.appendChild(document.createElement("td").createTextNode("30"));
    var trimage= tbody.appendChild(document.createElement("tr"));
    var image= trimage.appendChild(document.createElement("td").createElement("img"));
    image.src="../images/10_2.JPG";
    image.alt="10.3 image";
    image.colspan= "2";
    image.className= "img";



  tablecontainer.appendChild(article);
};
