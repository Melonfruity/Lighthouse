function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let index = -1;
  return function (){
    index ++;
    return list[index];
  }
}

const rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

/*

rollLoadedDie = function (){ index++; return list[index]} -> index = 0
rollLoadedDie = function (){ index++; return list[index]} -> index = 1
rollLoadedDie = function (){ index++; return list[index]} -> index = 2

What I think happens if that the first assignment to rollLoadedDie = makeLoadedDie()
holds the first iteration of makeLoadedDie() kind of like in place. Each time
rollLoadedDie is called, rollLoadDie is referenced to closure 
(function(){index ++; return list[index]}) and that is linked to the first iteration of
the makeLoadedDie() which isn't reset. As rollLoadedDie is called, it only calls
the closure and that changes the local variable index within the first iteration
of the makeLoadedDie() function.

*/