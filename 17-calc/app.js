function getResult(sign) {
    const num1El = document.querySelector('#num1');
    const num2El = document.querySelector('#num2');
    const resultEl = document.querySelector('#result');
    const num1 = +num1El.value;
    const num2 = +num2El.value;

    let result = 0;

    if(num1 == '' || num2 == '') {
        return false;
    }

    switch (sign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }

    num1El.value = '';
    num2El.value = '';

    resultEl.innerHTML = isNaN(result) ? 'Введите корректные данные' : result;
}