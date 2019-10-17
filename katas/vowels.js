let numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return data.split("").filter(l => (vowels.includes(l))).length
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));