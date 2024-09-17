const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");
module.exports = (app) => {
    app.use('/', homeRoutes);
    // bên ngoài dùng use
    app.use('/products', productRoutes);
}