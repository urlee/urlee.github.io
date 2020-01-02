
function arrival(){
    "use strict";
    var i = new Date();
    var h = i.getHours();

    if(0 <= h && h <= 12){
        var text1 = '本日発送!';
        document.getElementById('shipment').textContent = text1;
    }else{
        var text2 = '明日発送!';
        document.getElementById('shipment').textContent = text2;
    }
    setTimeout(arrival, 1000);
}
arrival();



function areaA(){


    var i = new Date();
    var nh = i.getHours();
    var week = new Array("日","月","火","水","木","金","土");
    var wt = new Date(i.getTime()+1*24*60*60*1000);
    var y = wt.getFullYear();
    var m = wt.getMonth() +1;
    var d = wt.getDate();
    var w = wt.getDay();

    var wn = new Date(i.getTime()+2*24*60*60*1000);
    var yn = wn.getFullYear();
    var mn = wn.getMonth() +1;
    var dn = wn.getDate();
    var wnn = wn.getDay();



    if(0 <= nh && nh <= 12){
        var a1 ="<p>"+y+"<br/>"+'<span class="m1Font">'+m+"/"+d+'</span>'+"（"+week[w]+"）"+"</p>";
        document.getElementById('a1').innerHTML = a1;
    }else{
        var a2 ="<p>"+yn+"<br/>"+'<span class="m1Font">'+mn+"/"+dn+'</span>'+"（"+week[wnn]+"）"+"</p>";
        document.getElementById('a1').innerHTML = a2;
    }

    setTimeout(areaA , 1000);
}
areaA();


function areaB(){


    var i = new Date();
    var nh = i.getHours();
    var week = new Array("日","月","火","水","木","金","土");
    var wt = new Date(i.getTime()+2*24*60*60*1000);
    var y = wt.getFullYear();
    var m = wt.getMonth() +1;
    var d = wt.getDate();
    var w = wt.getDay();

    var wn = new Date(i.getTime()+3*24*60*60*1000);
    var yn = wn.getFullYear();
    var mn = wn.getMonth() +1;
    var dn = wn.getDate();
    var wnn = wn.getDay();



    if(0 <= nh && nh <= 12){
        var a1 ="<p>"+y+"<br/>"+'<span class="m2Font">'+m+"/"+d+'</span>'+"（"+week[w]+"）"+"</p>";
        document.getElementById('b1').innerHTML = a1;
    }else{
        var a2 ="<p>"+yn+"<br/>"+'<span class="m2Font">'+mn+"/"+dn+'</span>'+"（"+week[wnn]+"）"+"</p>";
        document.getElementById('b1').innerHTML = a2;
    }

    setTimeout(areaB , 1000);
}
areaB();

function areaC(){


    var i = new Date();
    var nh = i.getHours();
    var week = new Array("日","月","火","水","木","金","土");
    var wt = new Date(i.getTime()+3*24*60*60*1000);
    var y = wt.getFullYear();
    var m = wt.getMonth() +1;
    var d = wt.getDate();
    var w = wt.getDay();

    var wn = new Date(i.getTime()+4*24*60*60*1000);
    var yn = wn.getFullYear();
    var mn = wn.getMonth() +1;
    var dn = wn.getDate();
    var wnn = wn.getDay();



    if(0 <= nh && nh <= 12){
        var a1 ="<p>"+y+"<br/>"+'<span class="m2Font">'+m+"/"+d+'</span>'+"（"+week[w]+"）"+"</p>";
        document.getElementById('c1').innerHTML = a1;
    }else{
        var a2 ="<p>"+yn+"<br/>"+'<span class="m2Font">'+mn+"/"+dn+'</span>'+"（"+week[wnn]+"）"+"</p>";
        document.getElementById('c1').innerHTML = a2;
    }

    setTimeout(areaC , 1000);
}
areaC();