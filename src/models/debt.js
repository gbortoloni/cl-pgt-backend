const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Informe um nome para este débito!"]
  },
  value: {
    type: Number,
    required: [true, "Informe o valor do débito!"]
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

exports.debtSchema = debtSchema;
