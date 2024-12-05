const axios = require("axios")


    axios.post("http://localhost:80/api/v1/products/", {
        name: "test",
        price: 10,
        description: "test",
        image: null
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })