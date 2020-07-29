function myfunction(){
    alert("Your submition is successful.\n Please do not submit again!");
}

function mefunction(){
    var a;
    if (confirm("Do you want to reset?")){
        location.reload();
    }else {
    }
    document.getElementById("demo").innerHTML=a;
}

function refunction(){
    var e;
    if (confirm("Do you want to reset?")){
        location.reload();
    }else {
    }
    document.getElementById("demo").innerHTML=e;
}

function newfunction(){
    var r;
    if (confirm("Your subimition is successful.\n Click OK to jump to homepage.\n Click cancel to stay.")){
        location.href="myweb.html";
    }else {
    }
    document.getElementById("demo").innerHTML=r;
}

function wfunction(){
    var w;
    if(confirm("Warning!\n If you are younger than 5 years old or older than 90 yuars old.\n Please do not enter this area!\n Thank you!")){
        location.href="myweb.html";
    }else{
    }
    document.getElementById("demo").innerHTML=w;
}











