const path = require('path')

const bookingControllers = {
    productDetail: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/productDetail.html" ))
    },
}

module.exports = bookingControllers ;