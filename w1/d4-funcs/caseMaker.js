let camelCase = function(input) {
  // Your code here
  const words = input.split(' ');
  const firstWord = words[0];
  return firstWord.concat(words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join(''));
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));