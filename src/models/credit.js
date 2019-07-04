const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Informe um nome para este crédito!"]
  },
  value: {
    type: Number,
    required: [true, "Informe o valor do crédito!"]
  }
});

exports.creditSchema = creditSchema;
