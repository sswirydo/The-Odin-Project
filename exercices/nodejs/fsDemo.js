



// // Async
// import fs from 'fs'
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Promise
import fs from 'fs/promises'
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err)
  }
};


const writeFile = async () => {
  try {
    const data = 'Content to write';
    await fs.writeFile('./test.txt', data);
  } catch (err) {
    console.log(err)
  }
};

const appendFile = async () => {
  try {
    const data = '\nContent to append';
    await fs.appendFile('./test.txt', data);
  } catch (err) {
    console.log(err)
  }
};


appendFile();
readFile();