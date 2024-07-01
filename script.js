// operations functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operates(firstNumber, secondNumber, operator) {
    let resultValue = 0;
    switch (operator) {
        case '+':
            resultValue = add(firstNumber, secondNumber)
            break;

        case '-':
            resultValue = subtract(firstNumber, secondNumber)
            break;

        case '*':
            resultValue = multiply(firstNumber, secondNumber)
            break;
            
        case '/':
            resultValue = divide(firstNumber, secondNumber)
            break;

        // case '=':
        //     resultValue
        //     break;
            
        // case '':
            
        //     break;
    }

    return resultValue;
}




// variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

let button = document.querySelector('#pad');
let display = document.querySelector('.display-result');
button.addEventListener('click', (event) => {
    let target = event.target.textContent; // pad button selected
    if (target.length <= 2) {
        console.log(target);
        display.textContent += target;
        switch (target) {
            case 'AC':
                firstNumber = 0;
                secondNumber = 0;
                operator = "";
                display.textContent = '';
                break;

            case 'C':

                break;

            case '+':
                operator = '+';
                break;

            case '-':
                operator = '-';
                break;

            case '*':
                operator = '*';
                break;

            case '/':
                operator = '/';
                break;

            case '=':

                break;
            
            default:
                if (firstNumber != 0 && operator != '') {
                    secondNumber += parseInt(target);
                } else {
                    firstNumber += parseInt(target)
                }
                break;
        }
    }
} )

// 11 numbers max input 