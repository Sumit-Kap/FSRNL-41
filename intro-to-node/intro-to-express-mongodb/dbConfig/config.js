const mongoose = require("mongoose");

const dbConnect = {
  connect: () => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/Users")
      .then((response) => {
        console.log("database connected successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = dbConnect;

/*
Create table t
ORM's - schema - collection/table
db.createCollection()


*/
