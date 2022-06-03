const fs = require("fs");

const createFile = async (base, list, limit) => {
  try {
    let closer = "";

    for (let index = 1; index <= limit; index++) {
      closer += `${base} x ${index} = ${base * index}\n`;
    }

    if (list) {
      console.log("===================".rainbow);
      console.log("    Tabla del:".blue, base);
      console.log("===================".rainbow);
      console.log(closer);
    }

    fs.writeFileSync(`./close/tabla-${base}.txt`, closer);
    return `Tabla ${base} created`;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createFile
};
