var prompt = require('prompt-sync')();
const age= prompt("Enter your age: ");
if(age<18){
    console.log("No Discount!");
}
else{
    console.log("You get 30% discount");
}