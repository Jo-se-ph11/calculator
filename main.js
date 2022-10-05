const calculator = () => {

    const previous_display = document.querySelector('.previous-display');
    const current_display = document.querySelector('.current-display');
    const num_btn =  document.querySelectorAll('.num');
    const opp_btn =  document.querySelectorAll('.operation');
    const clear = document.querySelector('.btn-clear');
    const del = document.querySelector('.btn-del');
    const equals = document.querySelector('.equals-btn');

    let current_value = [];
    let previous_value = [];
    let operator_value = [];

    function buttons() {

        clear.addEventListener('click', ()=> {
            current_value= [];
            previous_value = [];
            operator_value = [];
            screen();
    
        })
    
        del.addEventListener('click', ()=> {
            let temp_variable;
            temp_variable = current_value.toString().slice(0, -1);
            current_value = parseFloat(temp_variable);
            screen();
            if (temp_variable === 0 || temp_variable === []) {
                temp_variable = 0;
                current_value = temp_variable;
                screen();
            }            
        })
    
        num_btn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                if(btn.textContent === '.' && current_value.includes('.'))return;
                current_value += btn.textContent;
                screen();
            })
           
        })
    
        opp_btn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                operator_value = btn.textContent;
                calculate();
                screen();
            })
           
        })

        equals.addEventListener('click', ()=> {
            console.log("clicked")
            calculate();
            screen();
        })

    }
    buttons()

    function calculate() {
       
        let curr = parseFloat(current_value);
        let pre = parseFloat(previous_value)
        previous_value = `${current_value}${operator_value}`;
        let temp = [previous_value]
        current_value = [];
        let result;
        
        if(isNaN(pre) || isNaN(curr)) return;
        (operator_value === '+')? result = pre + curr
        :(operator_value === '*')? result = pre* curr
        :(operator_value === '/')? result = pre / curr
        :(operator_value === '-')? result = pre - curr
        :(operator_value === '%')? result = pre % curr
        :'';
        const rounded = Math.round((result + Number.EPSILON) * 100) /100
        if(rounded == Infinity) {
           current_value = "You can't divide by zero"
        } else {
            current_value = rounded;
        }
    }

    function screen() {
        current_display.textContent = current_value;
        previous_display.textContent = previous_value;
        
    }

}
calculator();
//if equals sign is clicked, call calculate and display the result
//if another operator is clicked without clicking the equals sign, 
//and num1, op, and num2 has already been clicked, calculate them 
//first and use the result as the previous value


function test(a, op, n2) {
   let res;
   
    if(op === "+") {
        return res = a + n2;
    } else if(op === "*") {
        return res = a * n2;
    }

}
//console.log(test(prompt("num1:"), prompt("Operator:"), prompt("num2:")))