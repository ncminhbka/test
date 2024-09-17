const Product = require("../../models/product.model")
const filterStatusHelper = require("../../helpers/filterStatus")
const searchHelper = require("../../helpers/search")
const paginationHelper = require("../../helpers/pagination")
module.exports.index = async (req, res) => {

  // TÍNH NĂNG LỌC THEO TRẠNG THÁI
  const filterStatus = filterStatusHelper(req.query);
  // mảng filterStatus đã đc add class active

  let find = {
      deleted: false
  };
  // một object tên là find
  if(req.query.status){
    find.status = req.query.status;
  }
  // Khi URL không chứa dấu ? và không có tham số truy vấn nào (như http://example.com/search), req.query sẽ không có 
  // thuộc tính nào và sẽ là một đối tượng rỗng ({}).
  // ở trên ta giả sử nếu trên url có key là status tức là req.query.status khác rỗng
  // thì ta sẽ add thêm trường status vào object find
  
  // TÍNH NĂNG TÌM KIẾM
  const objectSearch = searchHelper(req.query);
  if(objectSearch.regex){
    find.title = objectSearch.regex;
    //add thêm trường title cho object find. trường title phù hợp với title sản phẩm trong db
    // tí nữa Product.find(find) sẽ tìm đc sp có title mong muốn
  }


  //TÍNH NĂNG PHÂN TRANG
  const countProducts = await Product.countDocuments(find);
  let objectPagination = paginationHelper({
    currentPage: 1,
    limitItems: 4
  }, req.query, countProducts);
  
  
  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
  // cái dòng trên này là đưa ra products. cái này dùng chon cho cả tính năng phân trang, cả cho bộ lọc, cả tìm kiếm
  // dòng trên ko đơn giản đâu
  // khi có status trong find, products sẽ lấy ra đúng những sản phẩm có status yêu cầu. thêm nữa
  // còn phải tuân theo limit số sản phẩm 1 trang. tức là khi chọn active thì trang active cũng đc phân trang
  
  res.render("admin/pages/products/index",{
    products: products,
    pageTitle: "Danh sách sản phẩm",
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    // gửi keyword ra views tí vẽ vào ô tìm kiếm
    pagination: objectPagination
  });
}