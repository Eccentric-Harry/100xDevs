function setTimeoutPromisified(){
    return new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    })
}

function callback(){
    console.log("setTimeout executed!");
}

setTimeoutPromisified().then(callback);

const fs = require('fs');
function readFilePromisified(fileName, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, encoding, (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function printData(data){
    console.log(data);
}
readFilePromisified('data.txt', 'utf-8').then(printData).catch(err=>console.log(err));