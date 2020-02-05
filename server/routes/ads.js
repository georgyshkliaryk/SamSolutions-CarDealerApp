const express = require('express');
const router = express.Router();


//get a list of ads to sale from db
router.get('/ads', async function(req, res) {
    res.send({type: 'GET'});
    
});

//add a new ad to the db
router.post('/ads', async function(req, res) {
    res.send({type: 'POST'});
});

//update an ad in the db
router.put('/ads/:id', async function(req, res) {
    res.send({type: 'PUT'});
});

//delete an ad from the db
router.delete('/ads/:id', async function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;