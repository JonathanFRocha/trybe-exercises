const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);

const socketIoConfig = require("./config/socket");

const io = require("socket.io")(http, socketIoConfig);

require("./sockets/feed")(io);

app.use(express.static(path.resolve(__dirname + "/.." + "/public")));

http.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
