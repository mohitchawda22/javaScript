const prompt = require("prompt-sync")();

let runagain = true;
while (runagain) {
  let age = prompt("enter your age:");
  age = Number.parseInt(age);
  if (age >= 18) {
    alert("you can drive!");
  } 
  else if(age<0) {
    console.error("the age you entered is invalid!");
    break;
  }
  else{
    alert("you can drive!")
  }
  runagain = confirm("do you want to know again?");
}
