function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    const currentValue = display.innerHTML;
    const lastChar = currentValue.slice(-1);

    // 연산자가 연속으로 입력되지 않도록 방지
    if ('+-*/'.includes(char)) {
        if ('+-*/'.includes(lastChar)) {
            display.innerHTML = currentValue.slice(0, -1) + char;  // 마지막 연산자를 교체
        } else {
            display.innerHTML += char;
        }
    } 
    // 소수점이 연속으로 입력되지 않도록 방지
    else if (char === '.') {
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop(); // 마지막 숫자 추출
        if (!lastNumber.includes('.')) {
            display.innerHTML += char;
        }
    } 
    // 0이 처음부터 여러 번 입력되지 않도록 방지
    else if (char === '0') {
        const lastNumber = currentValue.split(/[\+\-\*\/]/).pop(); // 마지막 숫자 추출
        if (lastNumber !== '0') {
            display.innerHTML += char;
        }
    }
    // 숫자나 다른 문자는 그대로 추가
    else {
        display.innerHTML += char;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.innerHTML = Math.sqrt(eval(display.innerHTML));
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function insertLog() {
    const display = document.getElementById('display');
    display.innerHTML += 'log(';

    // 밑자리와 지수 입력 필드를 추가
    const baseInput = '<sup><input type="text" size="1" placeholder="base"></sup>';
    const valueInput = '<input type="text" size="2" placeholder="value">';
    display.innerHTML += `${baseInput}, ${valueInput})`;
}

function calculateLog() {
    const base = parseFloat(document.querySelector('input[placeholder="base"]').value);
    const value = parseFloat(document.querySelector('input[placeholder="value"]').value);
    const display = document.getElementById('display');
    try {
        if (isNaN(base) || isNaN(value)) {
            throw new Error('Invalid input');
        }
        display.innerHTML = Math.log(value) / Math.log(base);
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function calculateExponent() {
    const display = document.getElementById('display');
    try {
        display.innerHTML = Math.exp(eval(display.innerHTML));
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    const value = display.innerHTML;

    // 마지막 연산자를 찾아 부호를 반전시킴
    const lastOperatorIndex = Math.max(value.lastIndexOf('+'), value.lastIndexOf('-'));

    if (lastOperatorIndex > 0) { // 0이 아닌 경우에만 부호를 반전시킴
        const operator = value.charAt(lastOperatorIndex);

        if (operator === '+') {
            display.innerHTML = value.slice(0, lastOperatorIndex) + '-' + value.slice(lastOperatorIndex + 1);
        } else if (operator === '-') {
            display.innerHTML = value.slice(0, lastOperatorIndex) + '+' + value.slice(lastOperatorIndex + 1);
        }
    }
}

function calculateFactorial() {
    const display = document.getElementById('display');
    let num = eval(display.innerHTML);
    if (num < 0 || !Number.isInteger(num)) {
        display.innerHTML = 'Error';
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    display.innerHTML = result;
}
