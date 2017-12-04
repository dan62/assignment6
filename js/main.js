// JavaScript Document
function NewWindow(){
	var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("width_height").innerHTML = "Width: " + w + "<br>Height: " + h;
	document.getElementById("page_location").innerHTML="Location: "+ window.location.href;
}

window.addEventListener('resize', function checkWindow(event) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("width_height").innerHTML = "Width: " + w + "<br>Height: " + h;
})

function AppendText(){
document.getElementById("apendedText").innerHTML = "Hello World!";
}

function YellowColor() {
	document.getElementById("P3").style.color = "#FFFF00";
}

function toggleHide() {
    var x = document.getElementById('P2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

document.getElementById("show_here").addEventListener("mouseover", mouseOver);
document.getElementById("show_here").addEventListener("mouseout", mouseOut);
document.getElementById("show_here").addEventListener("mouseUp", mouseUp);
document.getElementById("show_here").addEventListener("mousedown", mouseDown);
document.getElementById("show_here").addEventListener("dblclick", doubleClick);

function mouseOver() {
    document.getElementById("show_here").innerHTML = "On Mouse Over!";
}

function mouseOut() {
    document.getElementById("show_here").innerHTML = "On Mouse Out!";
}

function mouseUp() {
    document.getElementById("show_here").innerHTML = "On Mouse Up!";
}

function mouseDown() {
    document.getElementById("show_here").innerHTML = "On Mouse Down!";
}

function doubleClick() {
    document.getElementById("show_here").innerHTML = "On Double Click!";
}