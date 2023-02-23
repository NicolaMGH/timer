const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!');
    setTimeout(() => {
      process.exit();
    }, 1000);
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === 1||2||3||4||5||6||7||8||9) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});