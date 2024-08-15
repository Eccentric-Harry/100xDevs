function setTimeoutPromisified(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function callback() {
    console.log("Done!");
}

setTimeoutPromisified(3000)
.then(callback)
.catch(err => console.log(err));


// function callback(){
//     console.log("Yay! I am done!");
// }

// function setTimeoutPromisified(ms){
//     return new Promise((resolve => {
//         setTimeout(resolve, ms);
//     }));
// }


// setTimeoutPromisified().then(callback).catch(err => console.log(err));

// the callback function is passed as resolve to the promise object.


// how do we write a fs object promisified?

const fs = require('fs');

function readFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(data); 
            }
        });
    });
}

function confirm(data) {
    console.log("File contents:", data);
    console.log("Done!");
}

readFilePromisified('data.txt', 'utf-8')
    .then(confirm)
    .catch(err => {
        console.error("Error reading file:", err);
    });


const input = "Hello, World!";
function writeFilePromisified(filePath, data, encoding){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filePath, data, encoding, (err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        } )
    })
}

writeFilePromisified('data.txt', input, 'utf-8')
    .then(()=>console.log("File written successfully!"))
    .catch((err)=>console.error("Error writing file:", err))