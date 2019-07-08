const mongoose = require("mongoose");

//mongodb://admin:admin123@ds031088.mlab.com:31088/geum -- MLAB
//mongodb://localhost/geum -- LOCAL
// mongodb://admin:admin86642501@ds349247.mlab.com:49247/ciclopagamento

module.exports = function() {
  const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/ciclopagamento'
  mongoose
    .connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB..."));
};
