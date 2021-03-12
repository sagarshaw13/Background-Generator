var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
css.textContent = "linear-gradient(to right,"+color1.value+", "+color2.value+");";

function setGradient(){
    body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
    css.textContent = body.style.background+";";

}

color1.addEventListener("input", function(){
    setGradient();
})

color2.addEventListener("input", function(){
    setGradient();
})

css.onclick = function(){
    document.execCommand("copy");
    alert("Copied the text : "+css.textContent);
}

