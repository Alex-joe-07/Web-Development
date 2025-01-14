let random = Math.random(); // Generate a random number
console.log(random);

let a = prompt("Enter the first number: ");
let b = prompt("Enter the operator (+, -, *, /): ");
let c = prompt("Enter the second number: ");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**", // Note: `**` is exponentiation in JavaScript
};

if (random > 0.2) {
    // 90% of the time, calculate correctly
    // alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
    // 10% of the time, calculate with faulty logic
    b = obj[b] || b; // If the operator is not in `obj`, use the original
    // alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
    // alert("the answer is faulty")
}
