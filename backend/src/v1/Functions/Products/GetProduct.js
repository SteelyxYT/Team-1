const MemoryDatabase = require("../../Data/ProductDatabase");

function GetProduct(req, res) {
  res.send(MemoryDatabase.getAllObjects());
}

function GetProductById(req, res) {
  const product = MemoryDatabase.getObjectById(Number(req.params.id));

  if (!product) return res.status(404).send("Product not found");
  else return res.send(product);
}
function GetProductByName(req, res) {
  const product = MemoryDatabase.getObjectByName(req.params.name);

  if (product.length === 0) return res.status(404).send("No products found");
  else return res.send(product);
}

module.exports = { GetProduct, GetProductById, GetProductByName };
