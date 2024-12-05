const add = function() {
    let sum = 0;
    for(let i = 0;i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum
  };
  
  const subtract = function() {
    if(arguments.length === 0) return 0;
    if(arguments.length === 1) return arguments[0];
  
    let diff = arguments[0];
    
    for(i = 1; i < arguments.length; i++){
      diff -= arguments[i];
    }
    return diff
  
  };
  
  const sum = function() {
   const numbers = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
   return numbers.reduce((acc, num) => acc + Number(num), 0);
  };
  
  const multiply = function() {
    let product = 1;
    for(let i = 0;i < arguments[0].length; i++){
      product *= arguments[0][i];
    } 
    return product
  
  };
  
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
  /* --THIS ALSO WORKS
  const factorial = function(n){
  let factorial = 1;
  if(n === 0 || n === 1){
  return 1
  }else{
  for(let i = n; i > 1; i--){
  factorial *= i;
  }
  }
  return factorial
  };
  */
  };
