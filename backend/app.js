const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/profile", require("./Routes/Profile"))
app.use("/produkter", require("./Routes/Produkter"))
app.use("/order", require("./Routes/Produkter"))


module.exports = app