const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get('https://dog.ceo/api/breed/${data}/images/random')
    .then((res) => {
      console.log(res.body);
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random Dog image saved to file');
      });
    })
    .catch((err) => {
      if (err) return console.log(err.message);
    });
});

//using .then() catch() chaining
