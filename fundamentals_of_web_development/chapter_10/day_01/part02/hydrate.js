const hydrate = (string) => {
  const drankTimes = string.match(/\d+/g).reduce((acc, curr) => Number(acc) + Number(curr), 0);
  return `${drankTimes} copo${drankTimes > 1 ? "s" : ""} de água`;
};

module.exports = hydrate;
