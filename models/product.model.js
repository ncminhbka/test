const mongoose = require("mongoose");
//Dòng này yêu cầu (import) thư viện mongoose, một thư viện phổ biến trong Node.js để tương tác với MongoDB
const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
  }
);

//schema là các mô hình dữ liệu
//mongoose.Schema cho phép bạn xác định các quy tắc và cấu trúc dữ liệu mà các tài liệu phải tuân theo trong MongoDB.
const Product = mongoose.model("Product", productSchema, "products");
//"Product": Đây là tên của mô hình (model)
//productSchema: Đây là schema được dùng để định nghĩa cấu trúc của các tài liệu trong collection.
//"products": Đây là tên cụ thể của collection trong MongoDB mà mô hình này sẽ liên kết

module.exports = Product;
//Dòng này xuất (export) mô hình Product để có thể được sử dụng trong các file khác. Khi bạn 
//require file này ở một nơi khác trong ứng dụng, bạn sẽ nhận được mô hình Product và có 
//thể sử dụng nó để thực hiện các thao tác CRUD với collection products trong MongoDB.

//Đoạn code này định nghĩa và xuất một mô hình Mongoose tên là Product. Mô hình này liên kết với collection products 
//trong MongoDB và dựa trên cấu trúc (schema) được định nghĩa trong productSchema. Mô hình này có thể được sử dụng 
//để thao tác dữ liệu của sản phẩm trong cơ sở dữ liệu MongoDB.