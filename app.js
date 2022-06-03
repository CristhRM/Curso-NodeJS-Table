const { createFile } = require("./helpers/multiplicar");
const {arg} = require('./config/yargs');
require('colors');

console.clear();

console.log(arg);

createFile(arg.b, arg.l, arg.li)
  .then((fileName) => console.log(fileName.rainbow))
  .catch((error) => console.log(error.red));