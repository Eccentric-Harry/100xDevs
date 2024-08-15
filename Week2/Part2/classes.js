// Classes in JavaScript

class Rectangle{
    constructor(height, width, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        console.log(this);
        
        return this.height * this.width;
    }

    printColor(){
        console.log(this.color);
    }
}

const rect = new Rectangle(10, 20, "red");
console.log(rect.area());


const map = new Map();
map.set("name", "Harinadh");
map.set("age", 23);
console.log(map.get("name"));
//  map.get("name");