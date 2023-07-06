const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const fileToWriteTo = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('error: ', error)
    process.exit();
  }

  fs.writeFile(fileToWriteTo, body, err => {
    if (err) {
      console.error(err);
    }

    console.log(`File downloaded and saved ${body.length} bytes to ${fileToWriteTo}.`);
  });

  
});