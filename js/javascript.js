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