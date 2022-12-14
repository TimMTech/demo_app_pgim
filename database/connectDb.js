const mongoose = require("mongoose");

module.exports = connectDb = () =>
  mongoose
    .connect(process.env.REACT_APP_DATABASE_ACCESS)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));
