let a = parseint(prompt("Enter the first number"));
let b = parseint(prompt("Enter the second number"));
let c = parseint(prompt("Enter the third number"));
let d = parseint(prompt("Enter the fourth number"));
let e = parseint(prompt("Enter the fifth number"));

function mean(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(mean(a, b, c, d, e));
