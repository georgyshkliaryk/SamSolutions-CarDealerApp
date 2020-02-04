const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/car-dealer');
mongoose.Promise = global.Promise;

app.use('/api', routes);

app.get('/', function(req, res) {
   res.send('hello');
   
});
app.listen(3001, function() {
  console.log('now listening for requests'); 
});


/*
const productRouter = express.Router();
 

productRouter.use("/create", function(request, response){
  response.send("Добавление обьявления");
});
productRouter.use("/delete", function(request, response){
   response.send("Удаление обьявления");
 });
productRouter.use("/:id", function(request, response){
  response.send(`Авто ${request.params.id}`);
});
productRouter.use("/", function(request, response){
  response.send("Список авто");
});

app.use("/products", productRouter);    */




