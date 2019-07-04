const mongoose = require("mongoose");

//mongodb://admin:admin123@ds031088.mlab.com:31088/geum -- MLAB
//mongodb://localhost/geum -- LOCAL

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/ciclopagamento", {
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB..."));
};
