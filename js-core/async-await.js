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

//using async await. inside one async we can one or more awaits. use basic JS try{} catch{}
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:${data}`);

    const res = await superagent.get(
      'https://dog.ceo/api/breed/${data}/images/random'
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random Dog image saved to file');
  } catch (err) {
    console.log(err);
  }
};

console.log('1. I will get Dog pics');
getDogPic();
console.log('2. Done getting Dog pics');

//here getDogPic() cannot block event loop. event loop will offload it to back ground and continue executing next line
//async function returns promise automatically
