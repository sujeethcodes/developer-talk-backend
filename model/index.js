const mongoose = require("mongoose");

const Connection = async () => {
  const mongoDB =
    "mongodb+srv://sujeeth:sujeeth123@cluster0.sowua6z.mongodb.net/developer_talks?retryWrites=true&w=majority";
  await mongoose
    .connect(mongoDB)
    .then(() => {
      console.log("DataBase Connected Sucessfully!");
    })
    .catch((error) => {
      console.log(error?.message);
    });
};

module.exports = Connection;
