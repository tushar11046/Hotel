console.log("Notes loaded successfully!");
var age=25;
const addNumber=function(a, b){
    return a+b;
}
module.exports={
    age,
    addNumber
}

const notes=require('./object.js');
var _= require('lodash');

var age=notes.age;
var result=notes.addNumber(age+18, 10);
console.log(result);

console.log(age);

var arr=["Tushar","Tushar","1",1,2,1,2,2];
var filter=_.uniq(arr);
console.log(filter);


console.log('Server file is running');

function add(a,b){
    return a+b;
}

var add= function(a,b){
    return a+b;
}

var add=(a,b) => {
    return a+b;
}

var add=(a,b)=>(a+b);

(function(){
    console.log("Automated Function");
})();

var result=add(10,20);

console.log(result);

function callback(){
    console.log("Callback function call Successfull!");
}

var add=function(a,b,callback){
    var sum=a+b;
    console.log("sum= "+sum);
    callback();
}

add(10,21,function(){
    console.log("Callback call successfull!");
}
); 

var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('Greet.txt','Hello '+user.username + '\n',()=>{
    console.log('File created succesfully!');
});

const jsonstring='{"name": "Tushar","Mobile": "9045281769","Location": "Garur"}';
const objt=JSON.parse(jsonstring);
console.log(objt);

const objt1={name: "Tushar", Mobile: "904581769"};
const jsonstring1=JSON.stringify(objt1);
console.log(jsonstring1);