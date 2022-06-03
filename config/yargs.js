const arg = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base to multiply",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "List calculator result",
  })
  .option('li', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'limit to operation'
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw new Error("Base must be a number");
    } else if(isNaN(argv.li)) {
      throw new Error("Limit must be a number");
    }
    return true;
  }).argv;

module.exports = {
  arg,
};
