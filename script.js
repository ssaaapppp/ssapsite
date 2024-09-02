function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
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

function calculateLog() {
    const display = document.getElementById('display');
    try {
        display.value = Math.log10(eval(display.value));
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
        
        // 가장 최근의 숫자 앞에 + 또는 - 추가
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
