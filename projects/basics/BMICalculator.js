// BMI Calculator 
const PromptSync = require("prompt-sync");
p = PromptSync();

function imc() {
    height = parseFloat(p("Enter your height in m: "))
    weight = parseFloat(p("Enter your weight in kg: "))

    const imc = weight / (height * height);

    return imc;
}

console.log(imc())