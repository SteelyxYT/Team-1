const MemoryDatabase = require("../../Data/MemoryDatabase");


module.exports = (req, res) => {
  const status = MemoryDatabase.deleteObjectById(Number(req.params.id));

  if (!status) return res.status(404).send("Product not found");
  else return res.send("Product has been removed");
};
