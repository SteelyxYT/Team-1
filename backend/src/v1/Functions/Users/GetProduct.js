const MemoryDatabase = require("../../Data/MemoryDatabase");

function GetProduct(req, res) {
  res.send(MemoryDatabase.getAllObjects());
}

function GetProductById(req, res) {
  const product = MemoryDatabase.getObjectById(Number(req.params.id));

  if (!product) return res.status(404).send("Product not found");
  else return res.send(product);
}

module.exports = { GetProduct, GetProductById };
