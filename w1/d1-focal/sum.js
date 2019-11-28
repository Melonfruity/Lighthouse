const args = process.argv;
const sum = args.slice(2).reduce((sum, value) => sum + Number(value), 0);
console.log(sum);
