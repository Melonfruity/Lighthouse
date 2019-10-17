const conditionalSum = function(values, condition) {
  
  const summer = (i) => {
    return values.reduce((sum, num) => {
      if(num%2 == i)
        return sum + num;
      else 
        return sum;
    }, 0);
  }

  if(condition == 'even'){
    return summer(0);
  } else {
    return summer(1);
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));