
let a = Math.random();
let b=2, c=4, d=4;
console.log("1.Addition")
console.log("2.Substraction")
console.log("3.Multiplication")
console.log("4.Division")

// b = parseInt(prompt("enter the first number"));

// d = parseInt(prompt("enter the operator"));
 
// c = parseInt(prompt("enter the second number"));
console.log(a)
if (a < 0.1 % 10) {
    switch (d) {
        case 1:
            console.log(" the substraction is " + (b - c))
            break;
        case 2:
            console.log(" the Division is " + (b / c))
            break;
        case 3:
            console.log(" the Addition is " + (b + c))
            break;
        case 4:
            console.log(" the result is " + (b ** c))
            break;
        default:
            break;
    }
}
else if(a>0.1){
    switch (d) {
        case 1:
            console.log(" the Addition is " + (b+c))
            break;
        case 2:
            console.log(" the substraction is " + (b - c))
            break;
        case 3:
            console.log(" the multiplication is " + (b * c))
            break;
        case 4:
            console.log(" the Division is " + (b / c))
            break;
        default:
            break;
    }
}