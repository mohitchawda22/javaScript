const prompt= require("prompt-sync")();

let random=Math.floor(Math.random()*101)
console.log(random)
let n
let chance=0
while (random!=n) {
    n=prompt("guess the number:")
    console.log("please try again")
        chance+=1
    if (random<n) {
        console.log("the is less than guess number!")
        
    }
    else if(random>n){
       console.log("the no. is greater than guess number!")
    }
    else{
        console.log("you take " +chance + "  to guess right number!")
        console.log(`you won the game`)
    }
}
