const MemoryDatabase = require("../../Data/ProductDatabase")

module.exports = (req, res) => {
    const { name, price, description, stock, image } = req.body

    const status = MemoryDatabase.updateObjectById(Number(req.params.id), { name, price, description, stock, image })

    if (!status) return res.status(404).send("Product not found");
    else return res.send({ message: "Product has been updated", data: status });
}