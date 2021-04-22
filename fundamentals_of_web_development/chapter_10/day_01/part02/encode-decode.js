const encode = (string) => {
  const encodeMap = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = "";
  for (let char of string) {
    if (encodeMap[char]) {
      encodedString += encodeMap[char];
    } else {
      encodedString += char;
    }
  }
  return encodedString;
};

const decode = (string) => {
  const encodeMap = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  let decodedString = "";
  for (let char of string) {
    if (encodeMap[char]) {
      decodedString += encodeMap[char];
    } else {
      decodedString += char;
    }
  }
  return decodedString;
};

module.exports = {
  encode,
  decode,
};
