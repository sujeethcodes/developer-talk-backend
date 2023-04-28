const socket = require("./socket/socket");
const express = require("express");
const app = express();

const cors = require("cors");
const config = require("../backend/config/config");
const Connection = require("./model/index");
app.use(cors("*"));
app.use(express.json({ limit: "10000000mb" }));
app.use(express.urlencoded({ limit: "1000000mb", extended: true }));
app.use("/userApi", require("./router"));

Connection();

const server = require("http").createServer(app);
socket(server);

server.listen(config.serverPORT, () => {
  console.log("server connected");
});
