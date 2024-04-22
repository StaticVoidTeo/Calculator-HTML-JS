let input = document.querySelector(`input[id="input"]`);
let previous = document.querySelector(`input[type="text"]`);
let buttons = document.querySelectorAll(".num");
let equal = document.querySelector("#equal");
let op = document.querySelectorAll(".op");
let del = document.querySelector("#del");
let clear = document.querySelector("#clear");

//code from here

var bul = true;
var num1=0, num2=0;

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        if(bul){
            input.value += value;
        }
        else{
            input.value = value;
            bul = true;
        }
    })
});

var prevOp;

op.forEach(function(button){
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        let num = input.value; 
        if(previous.value==""){
            if(value == "/")
                previous.value = num + "÷";
            else
                previous.value = num + value;
            num1 = parseFloat(num);
        }
        else{
            num2 = parseFloat(num);
            num1 = parseFloat(previous.value);
            if(prevOp == "+"){
            if(value == "/")
                previous.value = (num1 + num2) + "÷";
            else
                previous.value = (num1 + num2) + value;
            }
            if(prevOp == "-"){
            if(value == "/")
                previous.value = (num1 - num2) + "÷";
            else
                previous.value = (num1 - num2) + value;                
            }
            
            if(prevOp == "*"){
            if(value == "/")
                previous.value = (num1 * num2) + "÷";
            else
                previous.value = (num1 * num2) + value;
            }
            
            if(prevOp == "/"){
            if(value == "/")
                previous.value = (num1 / num2) + "÷";
            else
                previous.value = (num1 / num2) + value;
            }
        }
        input.value = "";
        prevOp = value;
    })
})

equal.addEventListener('click', function(){
    num1 = parseFloat(previous.value);
    num2 = parseFloat(input.value);
    if(input.value == ""){
        input.value = num1;
        previous.value = "";
    }
    else{
        if(prevOp == "+"){
            previous.value = "";
            input.value = num1 + num2;
        }
        if(prevOp == "-"){
            previous.value = "";
            input.value = num1 - num2;
        }
        if(prevOp == "*"){
            previous.value = "";
            input.value = num1 * num2;
        }
        if(prevOp == "/"){
            previous.value = "";
            input.value = num1 / num2;
        }
    }
    bul = false;
});

clear.addEventListener('click',function(){
    input.value = "";
    previous.value = "";
    bul = true;
});

del.addEventListener('click',function(){
    let val = input.value;
    input.value = val.substring(0, val.length-1);
});