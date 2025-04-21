const PromptSync = require("prompt-sync");

const prompt = PromptSync();

const age = prompt("Enter your age: ");
console.log(`Your age is ${age} years old.`);
