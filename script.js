// document.getElementsByClassName("btn1").addEventListener("click",alert("uuysaud"))
//     // alert("you have click btn1"))
// document.getElementsByClassName("btn2").onclick=alert("you clicked btn2!")
// document.getElementsByClassName("btn3").onclick=alert("you clicked btn3!")
// document.getElementById("book").addEventListener("click", function () {
//   let url = "https://www.google.com";
//   window.location="https://www.google.com"
//   win.focus()
// });


// setInterval(async function () {
// document.querySelector("#bulb").classList.toggle("bulb")
// }, 300)


function loadscript(src,callback) {
  var script =document.createElement("script")
  script.src=src
  script.onload=function(){
  console.log("loaded script"+ src)
  callback()
}
document.body.appendChild(script)
}
loadscript("https://www.google.com")