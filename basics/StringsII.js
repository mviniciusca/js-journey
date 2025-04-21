// II. Strings

let firstName = "Marcos";
let is_Developer = true;
let age = 36;

// String methods
console.log(firstName.length); // 6
console.log(firstName.charAt(0)); // M
console.log(firstName.toUpperCase()); // MARCOS
console.log(firstName.toLowerCase()); // marcos


// String concatenation
let lastName = "Coelho";
let fullName = firstName + " " + lastName;
console.log(fullName); // Marcos Coelho

// TypeOf 

console.log(typeof firstName); // string
console.log(typeof firstName.length); // number
console.log(typeof firstName.charAt(0)); // string
console.log(typeof is_Developer); // boolean
console.log(typeof age); // number