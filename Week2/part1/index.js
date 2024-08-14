// Learing JavaScript

// (Understand normal functions)

function sum(a,b){
    return a+b;
}
let ans = sum(2,3)
// console.log(ans);

function sum1ToN(n){
    return n*(n+1)/2
}
// console.log(sum1ToN(10));


// what is Syncronous and Asyncronous
// Syncronous: line by line execution
// Asyncronous: line by line execution not guaranteed

// Understanding I/O heavy tasks
// 1. Reading a file
const fs = require('fs');
const { setTimeout } = require('timers/promises');
let data = fs.readFileSync('data.txt','utf-8');
// console.log(data);

// 2. CPU bound tasks

for(let i=0;i<1000000000;i++){
    // do nothing
}

// Let's understand the importance of doing tasks asyncronous 

fs.readFile('data.txt','utf-8',(err,data)=>{
    // console.log(data);
})


// Functional Arguments

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  // console.log(doOperation(1, 2, sum))
  


// Now let's us understand the concept of callback functions and Asynchronous nature of JavaScript;

function print(err, data){
  if(err){
    console.log(err);
    return;
  }
  else
    console.log(data);
}


// fs.readFile("data.txt", "utf-8", print);
// console.log("Done!");

// setTimeout(()=>{
//   console.log("Done!");
// }, 5000);

// here the print method is a callback function.

/*
  Important Points:
  1. I/O heavy tasks take more time to execute than CPU bound tasks.
  2. Callback functions are used to handle asyncronous tasks.

*/


console.log("Start");

function timer(){
  console.log("Finish");
}

setTimeout(timer, 1000);
let c= 0;
for(let i = 0; i< 100000000; i++){
  c++;
}
console.log("CPU Bound Task Done ", c);


