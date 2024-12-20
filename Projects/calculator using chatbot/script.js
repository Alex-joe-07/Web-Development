// Get elements from the DOM
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";
let previousInput = "";
let operator = "";

// Add event listeners to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonText = buttons[i].innerText;

        if (buttonText === "AC") {
            // Clear the display
            currentInput = "0";
            previousInput = "";
            operator = "";
            display.innerText = currentInput;
        } else if (buttonText === "+/-") {
            // Change the sign of the number
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.innerText = currentInput;
        } else if (buttonText === "%") {
            // Calculate percentage
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.innerText = currentInput;
        } else if (buttonText === "=") {
            // Calculate the result when "=" is pressed
            if (previousInput !== "" && operator !== "") {
                currentInput = calculate(previousInput, currentInput, operator);
                display.innerText = currentInput;
                previousInput = "";
                operator = "";
            }
        } else if (buttonText === "+" || buttonText === "-" || buttonText === "×" || buttonText === "÷") {
            // Set the operator for calculation
            if (previousInput === "") {
                previousInput = currentInput;
                currentInput = "0";
            }
            operator = buttonText;
        } else if (buttonText === ".") {
            // Add a decimal point if not already present
            if (!currentInput.includes(".")) {
                currentInput += ".";
                display.innerText = currentInput;
            }
        } else {
            // Update the current input with number or operator
            if (currentInput === "0") {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;
            }
            display.innerText = currentInput;
        }
    });
}

// Function to perform the calculation based on the operator
function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (operator === "+") {
        return (a + b).toString();
    } else if (operator === "-") {
        return (a - b).toString();
    } else if (operator === "×") {
        return (a * b).toString();
    } else if (operator === "÷") {
        return (b !== 0) ? (a / b).toString() : "Error"; // Avoid division by zero
    } else {
        return "Error";
    }
}
