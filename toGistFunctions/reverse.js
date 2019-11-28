const args = process.argv.slice(2);

function reverse() {
  args.forEach((str) => {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i --) {
      reversedString += str[i];
    }

    console.log(reversedString);
  });
}

reverse();