const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route")
// const systemConfig = require("../../config/system")
module.exports = (app) => {
    const PATH_ADMIN = app.locals.prefixAdmin;
    // dùng biến toàn cục vì đã truyền app vào đây. trrong app có prefixAdmin
    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
    app.use(PATH_ADMIN + "/products", productRoutes);
}