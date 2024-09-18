console.log('The script works!');

//class 
class Room {
    constructor(name, length, width, capacity = 15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }
//methods
    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

//initialization and instantiation of room1 & 2
const room1 = new Room('Sun', 30, 20); //capacity is default
const room2 = new Room('Green', 15, 20, 18); //capacity is set to 18

//set false
room2.available = false;

//console.logs
console.log(`Room 1 - Available: ${room1.available}`);
console.log(`Room 2 - Available: ${room2.available}`);

console.log(`Room 1 - Capacity: ${room1.capacity}`);
console.log(`Room 2 - Capacity: ${room2.capacity}`);

console.log(`Room 1 - Name: ${room1.name}, Length: ${room1.length}, Width: ${room1.width}, Area: ${room1.getArea()}, Perimeter: ${room1.getPerimeter()}`);
console.log(`Room 2 - Name: ${room2.name}, Length: ${room2.length}, Width: ${room2.width}, Area: ${room2.getArea()}, Perimeter: ${room2.getPerimeter()}`);