const buttons = document.querySelector('#btn');
const screen = document.querySelector('#screen');
const btn0 = document.createElement('button')
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
const btn7 = document.createElement('button');
const btn8 = document.createElement('button');
const btn9 = document.createElement('button');
const equal_btn = document.createElement('button');
const clear_btn = document.createElement('button');
const del_btn = document.createElement('button');

clear_btn.textContent = "clear"
del_btn.textContent = "del"
btn1.textContent = 1;
btn2.textContent = 2;
btn3.textContent = 3;
btn4.textContent = 4;
btn5.textContent = 5;
btn6.textContent = 6;
btn7.textContent = 7;
btn8.textContent = 8;
btn9.textContent = 9;
btn0.textContent = 0;
equal_btn.textContent = "=";

buttons.appendChild(clear_btn).classList.add('btn');
buttons.appendChild(del_btn).classList.add('btn');
buttons.appendChild(btn1).classList.add('btn');
buttons.appendChild(btn2).classList.add('btn');
buttons.appendChild(btn3).classList.add('btn');
buttons.appendChild(btn4).classList.add('btn');
buttons.appendChild(btn5).classList.add('btn');
buttons.appendChild(btn6).classList.add('btn');
buttons.appendChild(btn7).classList.add('btn');
buttons.appendChild(btn8).classList.add('btn');
buttons.appendChild(btn9).classList.add('btn');
buttons.appendChild(btn0).classList.add('btn');
buttons.appendChild(equal_btn).classList.add('btn');




const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const modulus = (num1, num2) => {
    return num1 % num2;
}

const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+': 
            return add(num1, num2);
            break;
        case '-': 
            return subtract(num1, num2);
            break;
        case '/': 
            return divide(num1, num2);
            break;
        case '*': 
            return multiply(num1, num2);
            break;
        case '%': 
            return modulus(num1, num2);
            break;
        default:
            break;
    }
}
console.log(operate(20, '*', 4))
