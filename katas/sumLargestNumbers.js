let sumLargestNumbers = function(data) {

  let x = -Number.MIN_VALUE;
  let y = x;

  for(let i = 0; i < data.length; i++){
    if(data[i] > x || data[i] > y){
      if(data[i] > x && x < y){
        x = data[i];
      } else {
        y = data[i];
      }
    }
  }
  return x + y; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));