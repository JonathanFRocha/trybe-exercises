const fs = require("fs").promises;

// fs.readFile("./simpsom.json", "utf-8").then((fileContent) => {
//   const parsedJson = JSON.parse(fileContent);
//   parsedJson.forEach((item) => {
//     console.log(`ID: ${item.id} Personagem: ${item.name}`);
//   });
// });

const getCharFromID = (searchId) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./simpsom.json", "utf-8").then((fileContent) => {
      const parsedJson = JSON.parse(fileContent);
      parsedJson.find(({ id, name }) => {
        if (id == searchId) resolve(name);
      });
      reject("deu pau");
    });
  }).catch((err) => console.log("deu erro"));
};

getCharFromID(1);
