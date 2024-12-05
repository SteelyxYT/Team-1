const MemoryDatabase = require("../../Data/ProductDatabase")

module.exports = (req, res) => {

    const { name, price, description, stock, image } = req.body

    const newProduct = MemoryDatabase.addObject({
        name,
        price,
        description,
        stock,
        image
    })

    res.send(newProduct)

}