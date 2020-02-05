const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad')


//get a list of ads to sale from db
router.get('/ads', async function(req, res, next) {
    Ad.find({}).then(function(Ad) {
        res.send(Ad);
    }).catch(next);
});

//show an ad with a specified _id
router.get('/ads/:id', async function(req, res, next) {
    Ad.findById({_id: req.params.id}).then(function(Ad){
        res.send(Ad);
    }).catch(next);
});

//add a new ad to the db
router.post('/ads', async function(req, res, next) {
    Ad.create(req.body).then(function(Ad) {
        res.send(Ad);
    }).catch(next);
});

//update an ad in the db by _id
router.put('/ads/:id', async function(req, res, next) {
    Ad.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(Ad) {
            res.send(Ad);
    });
});

//delete an ad from the db by _id
router.delete('/ads/:id', async function(req, res, next) {
    Ad.findByIdAndRemove({_id: req.params.id}).then(function(Ad) {
        res.send(Ad);
    }).catch(next);
});

module.exports = router;