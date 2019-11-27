const stockPrices = [99, 24, 35, 31, 4, 38, 0];

// a - b > 0 a index > b index 
const findMaxProfit = (stocks) => {
  
  let buyP = 999;
  let sellP = 0;
  let maxP = 0;

  for(let i = 0; i < stocks.length - 1; i ++){
    sellP = stocks[i + 1];
    if(stocks[i] < sellP && stocks[i] < buyP){
      buyP = stocks[i];
    }
    if(sellP - buyP > maxP){
      maxP = sellP - buyP;
    }
    console.log(sellP, buyP, maxP);
  }

  return maxP;
}

console.log(findMaxProfit(stockPrices));