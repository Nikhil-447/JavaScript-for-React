const fs = require('fs');
const superagent = require('superagent');
const { reject } = require('superagent/lib/request-base');

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

//46. Waiting for Multiple Promises Simultaneously

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:${data}`);

    const res1Pro = superagent.get(
      'https://dog.ceo/api/breed/${data}/images/random'
    );
    const res2Pro = superagent.get(
      'https://dog.ceo/api/breed/${data}/images/random'
    );
    const res3Pro = superagent.get(
      'https://dog.ceo/api/breed/${data}/images/random'
    );
    const all = await Promise.all([res1Pro, res1Pro, res3Pro]);
    const imags = all.map((el) => el.body.message);
    console.log(imags);

    await writeFilePro('dog-img.txt', imags.join('\n'));
    console.log('Random Dog image saved to file');
  } catch (err) {
    console.log(err);
  }
  return 'Ready Done!';
};

console.log('1. I will get Dog pics');
const x = getDogPic();
console.log(x);
console.log('2. Done getting Dog pics');
