const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const queryParser = require("express-query-int");

const billingCycles = require("../routes/billingCycles");

module.exports = function(app) {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(queryParser());
  app.use("/api/billingCycles", billingCycles);
};
