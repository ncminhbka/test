const express = require('express');
//nạp module express vào biến express


require("dotenv").config();



const database = require("./config/database");
database.connect();
//kết nối db
const app = express();
//biến app sẽ đại diện cho cả trang web của mình
const port = process.env.PORT;
// thiết lập cổng nơi lắng nghe


app.set("views", "./views");
// câu lệnh trên Express sẽ biết rằng khi ta gọi res.render("xxx"), nó sẽ tìm kiếm tệp templateName trong 
//thư mục ./views. như vậy khi res.render chỉ cần đi sâu vào thư mục views, ko cần viết views ở đầu
app.set("view engine", "pug");
//Khi bạn sử dụng app.set("view engine", "pug");, Express sẽ biết rằng mọi lần bạn gọi res.render(), 
//nó sẽ sử dụng Pug để biên dịch và render các tệp template .pug thành HTML.

const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;
// biến toàn cục tên là prefixAdmin ở trong app, trong app là sẽ có prefixAdmin. tất cả file pug đều gọi đc biến prefixAdmin

app.use(express.static("public"));
// lệnh trên để phục vụ các tệp tĩnh (static files) như hình ảnh, tệp CSS, JavaScript đc đặt trong thư mục public
//Khi express.static được sử dụng, mọi tệp trong thư mục "public" có thể được truy cập trực tiếp thông qua URL.
//tức là đc public ra bên ngoài. tệp public sau này để xử lý bên front end

// router
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
// câu mặc định phải có