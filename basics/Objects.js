// Objects in JavaScript

const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}

const color = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    getColor: function (colorName) {
        return this[colorName];
    }
}

// how to access object properties
console.log(person.name); // John