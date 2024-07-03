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
    if (decimalFlag == true) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
    } else {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    }
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
    }
    resultValue = Math.round(resultValue * 100) / 100
    return resultValue;
}





let button = document.querySelector('#pad');
let display = document.querySelector('.display-result');
button.addEventListener('click', (event) => {
    let target = event.target.textContent; // pad button selected
    if (target.length <= 2) {
        switch (target) {
            case 'AC':
                firstNumber = '';
                secondNumber = '';
                operator = '';
                decimalFlag = false;
                display.textContent = '';
                break;

            case 'C':
                if (firstNumber != 0 && operator != '') {
                    if (secondNumber == 0) {
                        operator = '';
                    } else {
                    secondNumber = secondNumber.slice(0, -1);
                    // secondNumber = Math.floor(secondNumber / 10);
                    }   
                } else {
                    firstNumber = firstNumber.slice(0, -1);
                    // firstNumber = Math.floor(firstNumber / 10)
                }
                display.textContent = display.textContent.slice(0, -1);
                break;

            case '+':
                operator = '+';
                secondNumber = '';
                break;

            case '-':
                operator = '-';
                secondNumber = '';
                // display.textContent += target;
                break;

            case '*':
                operator = '*';
                secondNumber = '';
                // display.textContent += target;
                break;

            case '/':
                operator = '/';
                secondNumber = '';
                // display.textContent += target;
                break;

            case '.':

                if (firstNumber != '' && secondNumber != '') {
                    if (secondNumber.includes('.') == false) { // checks in case '.' was already pressed before
                        secondNumber += '.';
                        decimalFlag = true;
                        display.textContent += '.';
                    } else {
                        alert('You already added a "."')
                    }

                } else {
                    if (firstNumber.includes('.') == false) { // checks in case '.' was already pressed before
                        firstNumber += '.';
                        decimalFlag = true;
                        display.textContent += '.';
                    } else {
                        alert('You already added a "."')
                    }
                }
                break;

            case '=':
                if (firstNumber === '0' && secondNumber === '0' && operator === '/') {
                    alert('Fatal Error, you cant divive by 0');
                    firstNumber = '';
                    secondNumber = '';
                    operator = '';
                    decimalFlag = false;
                    display.textContent = '';
                } else if (firstNumber === '' || secondNumber === '' || operator === '' || firstNumber === '.' || secondNumber === '.') {
                    alert("Fatal Error, you didn't enter a value");
                    firstNumber = '';
                    secondNumber = '';
                    operator = '';
                    decimalFlag = false;
                    display.textContent = '';
                } else {
                    let operationResult = operates(firstNumber, secondNumber, operator);
                    display.textContent = operationResult;
                    console.log(`firstNumber: ${firstNumber}`);
                    console.log(`secondNumber: ${secondNumber}`);
                    console.log(`operator: ${operator}`);
                    firstNumber = operationResult;
                    secondNumber = '';
                    operator = ''
                }
                break;
            
            default:
                display.textContent += target;
                if (firstNumber != '' && operator != '') {
                    secondNumber += target;
                    display.textContent = secondNumber;
                } else {
                    firstNumber += target;
                }
                break;
        }
    console.log(`firstNumber: ${firstNumber}`);
    console.log(`secondNumber: ${secondNumber}`);
    console.log(`operator: ${operator}`);
    console.log(`decimals: ${decimalFlag}`);
    }
} )


// variables
let firstNumber = ''; 
let secondNumber = '';
let operator = '';
let decimalFlag = false;
