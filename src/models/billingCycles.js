const mongoose = require("mongoose");
const { creditSchema } = require("./credit");
const { debtSchema } = require("./debt");

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: false
  },
  credits: [creditSchema],
  debts: [debtSchema]
});

const BillingCycles = mongoose.model("BillingCycles", billingCycleSchema);

exports.BillingCycles = BillingCycles;
