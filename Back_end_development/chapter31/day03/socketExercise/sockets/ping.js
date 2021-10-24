module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`User Connected. ID ${socket.id}`);
    socket.emit("ola", "Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)");

    socket.on("ping", () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit("pong", `${socket.id} enviou um ping!`);
    });
  });
};
