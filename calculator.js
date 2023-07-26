// JS Problem 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
    if (operator == '+') {
        result = num1 + num2;
        console.log(result);
    }
    else if (operator == '-') {
        if (num2 > num1) {
            result = num2 - num1;
            console.log(result);
        }
        else {
            result = num1 - num2;
            console.log(result);
        }

    }
    else if (operator == '*') {
        result = num1 * num2;
        console.log(result);
    }
    else if (operator == '/') {
        if (num2 > num1) {
            result = num2 / num1;
            console.log(result);
        }
        else {
            result = num1 / num2;
            console.log(result);
        }
    }
}

calculator(9, 45, '/');
