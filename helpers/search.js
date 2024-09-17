module.exports = (query)=>{
  let object = {
    keyword: ""
    //ban đầu keyword rỗng, keyword tí nữa gửi ra views để làm tính năng chữ vừa nhập vẫn còn trên ô tìm kiếm
  }
  // tạo 1 object
  if(query.keyword){
    // nếu url có param keyword mà FE đã đưa lên
    object.keyword = query.keyword;
    // add keyword cho object
    const regex = new RegExp(object.keyword, "i");
    // xử lí keyword đó, cho nó ko phân biệt hoa thường
    object.regex = regex;
    // regex: tự tìm hiểu
  }
  return object;
  //object này sẽ có keyword và regex
}