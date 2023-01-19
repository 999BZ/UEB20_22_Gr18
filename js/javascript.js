let today = new Date();
console.log(today.toLocaleDateString());
let date = today.toISOString().slice(0,10);

var pdata = document.getElementById("datasot");

pdata.innerHTML = date;


$("#safePar").hide();
$("#safeFLIX").click(function () {
    if($("#safePar").is(':visible')){
        $("#safeFLIX").css("color", "black");
        $("#safePar").fadeOut(2000).slideUp(3000);
    }else{
        $("#safeFLIX").css("color", "red");
        $("#safePar").show();
    }
});

$("#mydiv").animate({
    width: '200px'
}, 3000);

var ratingsMax=0;
var shumaRatings = $("#shumatotale").get(0);

$("#addRbtn").click(function () {
    if(ratingsMax==0){
        $("#addrating").html("Rating from Guest1923: " + shumaRatings.textContent);
        ratingsMax=1;
        $("#addRbtn").html("Remove Rating");
    }else if(ratingsMax==1){
        $("#addrating").html("");
        ratingsMax=0;
        $("#addRbtn").html("Add Rating");
    }

});

$("#aboutUL").add("<li>Animated</li>").appendTo("#aboutUL");



//############################################################################################################
//MaxValue, NaN, toExponential, toString
document.getElementById("maxValue").innerHTML = "Max Number: " + Number.MAX_VALUE;

document.getElementById("NaN").innerHTML = "Not a number: " + NaN;

let num = 1450;
let n = num.toExponential();
document.getElementById("exponent").innerHTML = "Exponencial: " + n;

let num2 = 4578;
document.getElementById("toString").innerHTML = "Number to String: " + num2.toString();