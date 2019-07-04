const express = require("express");
const router = express.Router();

const { BillingCycles } = require("../models/billingCycles");
const errorHandler = require("../common/errorHandler");

router.get("/", async (req, res) => {
  const billingCycles = await BillingCycles.find({});
  res.json(billingCycles);
});

router.get("/count", async (req, res) => {
  BillingCycles.countDocuments((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

router.get("/summary", async (req, res) => {
  BillingCycles.aggregate([
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 }
    }
  ]).exec((error, result) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json(result[0] || { credit: 0, debt: 0 });
    }
  });
});

router.get("/detalhes/:id", async (req, res) => {
  try {
    const billingCycle = await BillingCycles.findOne({
      _id: req.params.id
    });
    if (!billingCycle)
      return res
        .status(404)
        .json("Este ciclo de pagamento não foi encontrado.");

    res.json(billingCycle);
  } catch (ex) {
    res.json(ex.message);
  }
});

router.post("/", async (req, res) => {
  const billingCycle = new BillingCycles({
    name: req.body.name,
    month: req.body.month,
    year: req.body.year,
    credits: req.body.credits,
    debts: req.body.debts
  });

  await billingCycle.save();
  res.json(billingCycle);
});

router.put("/:id", async (req, res) => {
  const billingCycle = await BillingCycles.updateOne(
    {
      _id: req.params.id
    },
    {
      $set: {
        name: req.body.name,
        month: req.body.month,
        year: req.body.year,
        credits: req.body.credits,
        debts: req.body.debts
      }
    }
  );

  res.json(billingCycle);
});

router.delete("/:id", async (req, res) => {
  const billingCycle = await BillingCycles.deleteOne({
    _id: req.params.id
  });

  res.json(billingCycle);
});

module.exports = router;
