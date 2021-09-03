const errorBuilder = (status, message) => {
  return {
    status,
    message,
  };
};

module.exports = errorBuilder;