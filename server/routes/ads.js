const express = require("express");
const router = express.Router();
const Ad = require("../models/Ad");

//get a list of ads to sale from db
router.get("/ads", async function(req, res, next) {
  let criteria = {};
  if (req.query.carModel) {
    criteria.carModel = req.query.carModel;
  }

  if (req.query.min_price && req.query.max_price) {
    criteria.carPrice = {
      $gte: req.query.min_price,
      $lte: req.query.max_price
    };
  }
  if (req.query.carUsed) {
    criteria.carUsed = req.query.carUsed;
  }
  if (req.query.carType) {
    criteria.carType = req.query.carType;
  }
  if (req.query.carYear) {
    criteria.carYear = req.query.carYear;
  }

  Ad.find(criteria)
    .then(function(Ad) {
      res.send(Ad);
    })
    .catch(next);
});

//show an ad with a specified _id
router.get("/ads/:id", async function(req, res, next) {
  Ad.findById({ _id: req.params.id })
    .then(function(Ad) {
      res.send(Ad);
    })
    .catch(next);
});

//add a new ad to the db
router.post("/ads", async function(req, res, next) {
  Ad.create(req.body)
    .then(function(Ad) {
      res.send(Ad);
    })
    .catch(next);
});

//update an ad in the db by _id
router.put("/ads/:id", async function(req, res, next) {
  Ad.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    function(Ad) {
      res.send(Ad);
    }
  );
});

//delete an ad from the db by _id
router.delete("/ads/:id", async function(req, res, next) {
  Ad.findByIdAndRemove({ _id: req.params.id })
    .then(function(Ad) {
      res.send(Ad);
    })
    .catch(next);
});

module.exports = router;
