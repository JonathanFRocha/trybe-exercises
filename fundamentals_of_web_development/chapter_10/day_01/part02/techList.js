const techList = (arr, name) => {
  if (arr.length === 0 || !arr) return "Vazio!";
  return arr.sort().map((tech) => {
    return {
      tech,
      name,
    };
  });
};

module.exports = techList;
