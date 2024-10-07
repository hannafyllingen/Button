//Eks1 <button class="knapp" onmouseover="this.style.backgroundColor='red'; this.style.fontSize = '20px'" onmouseout="this.style.backgroundColor = 'blue' ; this.style.fontSize = '10px'">Hold musen over!</button>

//Eks2

// <button id="knapp">Hold musen over!</button>

const knapp = document.getElementById("knapp");

function mouseOver () {
    knapp.innerHTML = "ta vekk musen";
    knapp.style.backgroundColor = "red";
    knapp.style.color = "green";
}

function mouseOut () {
    knapp.innerHTML = "ta musen over igjen!"
    knapp.style.backgroundColor = "blue";
    knapp.style.color = "purple";
}

knapp.addEventListener("mouseover",mouseOver);
knapp.addEventListener("mouseout",mouseOut);

//Eksempel 3
// <button class="knapp" onmouseover="mouseOver(this,'blue')" onmouseout="mouseOut(this,'black')">Hold musen over!</button>
function mouseOver (element, farge) {
    element.style.backgroundColor = farge;
    element.style.color = "black";
}

function mouseOut (element, farge) {
    element.style.backgroundColor = farge;
    element.style.color = "white";

}