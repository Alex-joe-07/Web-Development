// Function to perform basic calculator operations
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error! Division by zero.";
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator!";
            break;
    }

    return result;
}

// Example usage
const number1 =prompt("Enter first number:");
const number2 = prompt("Enter second number:");
const operator = prompt("Enter operator (+, -, *, /, %):");

const output = calculator(number1, number2, operator);

console.log(`Result: ${output}`);

