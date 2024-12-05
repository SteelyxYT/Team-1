const MemoryDatabase = require("../../Data/MemoryDatabase")

module.exports = (req, res) => {

    const { name, price, description, image } = req.body

    const newProduct = MemoryDatabase.addObject({
        name,
        price,
        description,
        image
    })

    res.send({ message: "Product has been added", data: newProduct})

}