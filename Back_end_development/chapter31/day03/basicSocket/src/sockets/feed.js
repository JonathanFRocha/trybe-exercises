module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("update", (amount) => {
      io.emit("update", amount);
    });

    socket.on("updateStars", (amount) => {
      io.emit("updateStars", amount);
    });
  });
};
