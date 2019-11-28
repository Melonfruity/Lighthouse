const args = process.argv.slice(2);

function pigLatinTranslator() {
  args.forEach((str) =>
    console.log(str.slice(1) + str[0] + 'ay');
  );
}

pigLatinTranslator();