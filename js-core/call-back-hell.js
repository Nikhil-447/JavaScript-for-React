const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get('https://dog.ceo/api/breed/${data}/images/random')
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body);
    });

  fs.writeFile('dog-img.txt', res.body.message, (err) => {
    if (err) return console.log(err.message);
    console.log('Random Dog image saved to file');
  });
});

// We ended up in Call backs inside of call backs inside of call backs.. In real they can go very deep call back hell. Still its Asynchronous
