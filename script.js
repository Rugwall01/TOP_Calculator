

const inputDisp = document.querySelector("#display1");


let operatorType = '';
let displayValue = '';
  
  
  
  
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
  
  const operate = function(funct, a, b) {
    return funct(a, b);
  };

  /*const clear = function() {
    operatorType = '';
    displayValue = '';

  }*/
  
  




appendToDisp = (arg) => inputDisp.value += arg;

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