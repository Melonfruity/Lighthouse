const rollDice = (rolls) => {
  let results = [];
  for (let i = 0; i < rolls; i ++) {
    results.push(Math.floor(Math.random() * 6));
  }
  return `Rolled ${rolls} dice: ${results.join(',')}`;
};