const password = process.argv.slice(2);

const obfuscate = (password) => {
  let newPassword = '';
  password = password[0].toLowerCase();

  for (let i = 0; i < password.length; i ++) {
    let ch = password.charAt(i);
    if (ch === 'a') {
      ch = '4';
    } else if (ch === 'e') {
      ch = '3';
    } else if (ch === 'o') {
      ch = '0';
    } else if (ch === 'i') {
      ch = '1';
    }
    newPassword += ch;
  }

  return newPassword;
};