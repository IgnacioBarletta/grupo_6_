const path = require('path')

const bookingControllers = {
    productDetail: (req, res) => {
        res.render('booking/productDetail')
    },
}

module.exports = bookingControllers ;