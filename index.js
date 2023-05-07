var a=document.querySelector("h1");
var color1=document.querySelector(".class1");
var color2=document.querySelector(".class2")
var body=document.getElementById("abc")
function setgradient(){
    body.style.background="linear-gradient(to right,"+ color1.value +","+ color2.value +")";
}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);
