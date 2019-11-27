// use % to get the digits
const checkDigit = (num) => {
  if(Number(num)) num = num * 10 + 8;
  
  let numArray = [];
  let checkNum = 0;

  while(num > 0){
    let digit = num % 10;
    console.log(digit, numArray.length)
    if(numArray.length > 0 && numArray.length % 2 === 1){
      if((digit * 2) / 10 > 0){
        const newDigit = Math.floor((digit * 2)/10) + (digit * 2) % 10;
        numArray.push(newDigit);
        checkNum += newDigit;
      }
    } else {
      numArray.push(digit);
      if(numArray.length > 1) checkNum += digit;
    }
    console.log(numArray)
    
    num = Math.floor(num / 10);
  }
  checkNum = (checkNum * 9) % 10;
  numArray[0] = checkNum;

  return numArray.reverse().join('')
}

let num = 7992739871;
