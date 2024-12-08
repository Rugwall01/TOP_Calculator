

const inputDisp = document.querySelector("#display1");

let operators = /[\+\-x÷]/;
let isResult = false;
  
  const add = function(a, b) {
    return a + b;
  }
  
  const subtract = function(a, b) {
   return a - b;
  };
  
  const multiply = function(a, b) { 
    return a * b;
    
  };

  const divide = function(a, b) {
    return a/b;
  };
  
  const execute = function(funct, a, b) {
    try {
        return funct(a, b);}
    catch(error){
        inputDisp.value = "Error";
    }
  };

  const operate = function() {
    let display = inputDisp.value.split(' ');
    display[0] = Number(display[0]);
    display[2] = Number(display[2]);
    if(display[1] == '+'){inputDisp.value = execute(add, display[0], display[2]);};
    if(display[1] == '-'){inputDisp.value = execute(subtract, NUmdisplay[0], display[2]);};
    if(display[1] == 'x'){inputDisp.value = execute(multiply, display[0], display[2]);};
    if(display[1] == '÷'){inputDisp.value = execute(divide, display[0], display[2]);};

    isResult = true;


};
 
appendToDisp = (arg) => {
    if (isResult && inputDisp.value.match(operators) && !arg.match(operators)){
        inputDisp.value += arg;
        operate();
    }
    else if (isResult && !arg.match(operators)) {
        clearAll();
        inputDisp.value += arg;
        isResult = false;
    }
    else if (isResult && arg.match(operators)) {
        inputDisp.value += arg;
        isResult = false;
    }
    else if (arg.match(operators) && inputDisp.value.split(' ').length === 3) {
        operate();
        inputDisp.value += arg;
        isResult = false;
    }
    else {
        inputDisp.value += arg;
    }
};


function clearAll() {
    return inputDisp.value = "";
}

function del() {
    inputDisp.value = inputDisp.value.slice(0,-1);
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const power = function(base, exp) {
    let pow = 1;
    for(let i = 0; i < exp; i++){
      pow *= base 
    
  }
  if(exp < 0){
    pow = 1 / pow;
  }
  
  return pow
    
  };
  
  const factorial = function(n) {
    let factorial = n;
    if(n === 0 || n === 1){
      return 1
    }else{
      for(i = n; i > 1; i--){
        factorial = Number(factorial);
        factorial *= (i-1);
        }
    return factorial
    }
};