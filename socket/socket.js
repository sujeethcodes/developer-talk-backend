const socket = require("socket.io");
const Message = require("../model/languageMessage.Schema");

module.exports = async (server) => {
  const io = new socket.Server(server, {
    cors: {
      origin: "*",
    },
    pingTimeout: 5000,
  });

  io.on("connection", (socket) => {
    console.log("socket server is active!");

    socket.on("talks", async (data) => {
      const message = await Message.create({
        senderId: data?.senderId,
        message: data?.message,
      });
      socket.emit("recivedTalks", data);
    });

    socket.on("disconnect", async (data) => {
      const disconnectedTime = new Date();
      console.log(data, disconnectedTime);
    });
  });
};
