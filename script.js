function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    const lastChar = currentValue.slice(-1);

    // 연산자가 연속으로 입력되지 않도록 방지
    if ('+-*/'.includes(char) && '+-*/'.includes(lastChar)) {
        display.value = currentValue.slice(0, -1) + char;  // 마지막 연산자를 교체
    } else {
        display.value += char;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function insertLog() {
    const display = document.getElementById('display');
    display.value += 'log(';
    display.value += `<span class="log-inputs"><input id="log-base" type="text" placeholder="base">, <input id="log-value" type="text" placeholder="value"></span>)`;
}

function calculateLog() {
    const base = parseFloat(document.getElementById('log-base').value);
    const value = parseFloat(document.getElementById('log-value').value);
    const display = document.getElementById('display');
    try {
        if (isNaN(base) || isNaN(value)) {
            throw new Error('Invalid input');
        }
        display.value = Math.log(value) / Math.log(base);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateExponent() {
    const display = document.getElementById('display');
    try {
        display.value = Math.exp(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    const value = display.value;
    const matches = value.match(/-?\d+(\.\d+)?$/);

    if (matches) {
        const lastNumber = matches[0];
        const signToggled = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
        
        display.value = value.slice(0, -lastNumber.length) + signToggled;
    }
}

function calculateFactorial() {
    const display = document.getElementById('display');
    let num = eval(display.value);
    if (num < 0 || !Number.isInteger(num)) {
        display.value = 'Error';
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    display.value = result;
}
