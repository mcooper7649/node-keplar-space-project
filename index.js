const { parse } = require('csv-parse');
const fs = require('fs');
const results = [];
// Create the parser

fs.createReadStream('kepler_data.csv')
  .on('data', (data) => {
    results.push(data);
  })
  .on('error', (err) => {
    console.error(err);
  })
  .on('end', () => {
    console.log(results);
    console.log('done');
  });

//parse
