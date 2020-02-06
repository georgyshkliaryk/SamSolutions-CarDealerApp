const express = require('express');
const routes = require('./routes/ads');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');

const app = express();
const PORT = config.get('port') || 5000;
const MongoUri = config.get('MongoUri');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function() {
     console.log('MongoDB is working...');
    })
  .catch(function(e) {
     console.log(e);
   });


//middlewares
app.use(bodyParser.json());

app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next) {
  //console.log(err);
  res.status(400).send({error: err.message});
});

app.get('/', function(req, res) {
   res.send('server is working...');
   
});
app.listen(PORT, function() {
  console.log('Now listening for requests on port: ' + `${PORT}`); 
});





