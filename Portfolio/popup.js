sessionStorage.setItem('firstVisit', '1');
    $("document").ready( function () {
       if (!sessionStorage.getItem('firstVisit') === "1")
       {  alert("To navigate the site, click the M logo box!");}
    });
