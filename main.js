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
    
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const del = document.querySelector('.btn-del');
const percentage = document.querySelector('.percentage-btn');
const division = document.querySelector('.divide-btn');
const addition = document.querySelector('.add-btn');
const multiplication = document.querySelector('.multiply-btn');
const subtraction = document.querySelector('.subtract-btn');
const equals = document.querySelector('.equals-btn');
const one = document.querySelector('.btn-1');
const two= document.querySelector('.btn-2');
const three = document.querySelector('.btn-3');
const four = document.querySelector('.btn-4');
const five = document.querySelector('.btn-5');
const six = document.querySelector('.btn-6');
const seven= document.querySelector('.btn-7');
const eight = document.querySelector('.btn-8');
const nine = document.querySelector('.btn-9');
const zero = document.querySelector('.btn-0');
const dot = document.querySelector('.btn-dot');
const div = document.querySelector('.div1');
const main_btn = document.querySelector('#main-btn');
const container = document.querySelector('#container');
  
const display = ()=> {

    multiplication.addEventListener('click', ()=> screen.textContent = '*');
    division.addEventListener('click', ()=> screen.textContent = '/');
    addition.addEventListener('click', ()=> screen.textContent = '+');
    percentage.addEventListener('click', ()=> screen.textContent = '%');
    subtraction.addEventListener('click', ()=> screen.textContent = '-');
    one.addEventListener('click', ()=> screen.textContent = 1);
    two.addEventListener('click', ()=> screen.textContent = 2);
    three.addEventListener('click', ()=> screen.textContent = 3);
    four.addEventListener('click', ()=> screen.textContent = 4);
    five.addEventListener('click', ()=> screen.textContent = 5);
    six.addEventListener('click', ()=> screen.textContent = 6);
    seven.addEventListener('click', ()=> screen.textContent = 7);
    eight.addEventListener('click', ()=> screen.textContent = 8);
    nine.addEventListener('click', ()=> screen.textContent = 9);
    dot.addEventListener('click', ()=> screen.textContent = ".");
    zero.addEventListener('click', ()=> screen.textContent = 0);
   
}
display();

