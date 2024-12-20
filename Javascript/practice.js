// let a = 1;
// let b="Alex";
// let age = prompt("Enter the age: ")
// console.log(a,b)
// if (age > 18) {
//     alert("The person is adult")
// }
// else{
//     alert("The person is child")

// }
console.log("1.Addition")
console.log("2.Subtraction")
console.log("3.Multiplication")
console.log("4.Division")
let x = parseFloat(prompt("Enter the first number ")); // Convert input to a number
let y = parseFloat(prompt("Enter the second number ")); // Convert input to a number
let z = parseInt(prompt("Enter the number of the given operation")); 
switch (z) {
    case 1:
        console.log("The addition of two number is "+(x+y))
        break;
        case 2:
            console.log("The Substraction of two number is "+(x-y))
            break;
            case 3:
        console.log("The Multiplication of two number is "+(x*y))
        break;
        case 4:
        console.log("The Division of two number is "+(x/y))
        break;
    default:
        break;
}