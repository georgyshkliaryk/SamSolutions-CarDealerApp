var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.json({ message: "hello" });
});



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

app.use("/products", productRouter);

app.listen(3001);


