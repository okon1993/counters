var counter = document.querySelector(".counter");
var addCount = document.querySelector("#addCountBtn");
var lowerCount = document.querySelector("#lowerCountBtn");

var count = 0;

addCount.addEventListener("click", incrementCounter);
function incrementCounter(){
    count= count + 1;
    counter.innerHTML = count;
    if (counter.innerHTML > "0"){
        counter.style.color = "green";
    }
    else if (counter.innerHTML === "0"){
        counter.style.color = "white";
    }
    counter.animate([{opacity: "0.1"},{opacity: "1.0"}], 
    {duration: 1000, fill: "forwards" });
}

lowerCount.addEventListener("click", decrementCounter);
function decrementCounter(){
    count= count - 1;
    counter.innerHTML = count; 
    if (counter.innerHTML < "0"){
        counter.style.color = "red";
    }
    else if (counter.innerHTML === "0"){
        counter.style.color = "white";
    }
    counter.animate([{opacity: "0.1"},{opacity: "1.0"}], 
    {duration: 1000, fill: "forwards" }); 
}