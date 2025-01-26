const fs = require('node:fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
fs.readFile('test.txt')