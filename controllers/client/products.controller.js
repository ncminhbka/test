const Product = require("../../models/product.model");
// lấy ra mô hình Product
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    });
    // chờ đê lấy ra các sản phẩm có status là active và deleted là false. products sẽ là 1 mảng các sản phẩm (object)
    const newProduct = products.map(item => {
        item.priceNew = (item.price*(100-item.discountPercentage)/100).toFixed(0);
        // tạo mảng mới là newProduct bằng hàm map
        // thêm 1 trường giá mới vào mỗi item, sau đó trả về item đó.
        // mảng newProduct 
        return item;
    });
    
    res.render("client/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: newProduct
        // gửi cho views
    });
}