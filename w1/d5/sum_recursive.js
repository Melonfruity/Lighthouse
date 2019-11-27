const sumRecursive = (upperLimit) => {
  if(upperLimit !== 0)
    return sumRecursive(upperLimit - 1) + upperLimit;
  return 0;
}

/*
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}
*/

console.log(sumRecursive(4));