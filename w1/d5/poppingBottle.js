// Every 2 empty bottles, free full pop
// Every 4 bottle caps, free full pop
// 1 pop is $2

const input = process.argv.slice(2);

const pops = (m) => {
  
  let b = m / 2; 
  let e = b;
  let c = b;
  let t = {
    b: b,
    e: 0,
    c: 0,
  };

  while(( c / 4 ) >= 1 || ( e / 2 ) >= 1){
    b = 0;
    let bottlesFrome = Math.floor(e / 2);
    let bottlesFromc = Math.floor(c / 4);
    t.e += bottlesFrome;
    t.c += bottlesFromc;    
    b = bottlesFrome + bottlesFromc;
    e -= 2 * Math.floor(e / 2)
    c -= 4 * Math.floor(c / 4)
    t.b += b;
    e += b;
    c += b;

  }
  
  console.log(`TOTAL BOTTLES: ${t.b}`);
  console.log(`TOTAL BOTTLES FROM EMPTY BOTTLES: ${t.e}`);
  console.log(`TOTAL BOTTLES FROM CAPS: ${t.c}`);
  console.log(`REMAINING BOTTLES: ${b}`);
  console.log(`REMAINING EMPTY BOTTLES: ${e}`);
  console.log(`REMAINING CAPS: ${c}`);

}

pops(input[0])