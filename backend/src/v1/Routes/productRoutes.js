const router = require("express").Router()
const CreateProduct = require("../Functions/Products/CreateProduct")
const { GetProduct, GetProductById, GetProductByName } = require("../Functions/Products/GetProduct")
const RemoveProduct = require("../Functions/Products/RemoveProduct")
const UpdateProduct = require("../Functions/Products/UpdateProduct")

router.post("/", CreateProduct)

router.get("/search/:name", GetProductByName)

router.get("/", GetProduct)

router.get("/:id", GetProductById)

router.delete("/:id", RemoveProduct)

router.put("/:id", UpdateProduct)

module.exports = router