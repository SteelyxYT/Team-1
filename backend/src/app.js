const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/products", require("./v1/Routes/productRoutes"))


module.exports = app