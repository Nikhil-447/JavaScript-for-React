const fs = require('fs');
const superagent = require('superagent');
const { reject } = require('superagent/lib/request-base');

//using promise contructor with executor function

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file!');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Cound not write the file!');
      resolve('success');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed:${data}`);

    return superagent.get('https://dog.ceo/api/breed/${data}/images/random');
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random Dog image saved to file');
  })
  .catch((err) => {
    if (err) return console.log(err.message);
  });
