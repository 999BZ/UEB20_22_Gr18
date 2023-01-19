let today = new Date();
console.log(today.toLocaleDateString());
let date = today.toISOString().slice(0,10);

var pdata = document.getElementById("datasot");

pdata.innerHTML = date;