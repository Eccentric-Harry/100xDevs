//Create a function that takes an array of objects as input and returns the users whose age is more than 18.

const users = [
    {
        name: "Hari",
        age: 20
    },
    {
        name: "John",
        age: 17
    },
    {
        name: "Mike",
        age: 25
    },  
    {
        name: "Smith",
        age: 15
    }
]

function canVote(users){
    let result = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].age > 18){
            result.push(users[i].name);
        }
    }
    // return result;
    return users.filter(user => user.age > 18);
}

console.log(canVote(users));