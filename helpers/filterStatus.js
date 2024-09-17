module.exports = (query) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: ""
    },
    {
      name: "Hoạt đông",
      status: "active",
      class: ""
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: ""
    }
  ];
  // tạo 1 mảng tên là filterStatus chứa 3 nút
  if(query.status){
    const index = filterStatus.findIndex(item => item.status == query.status);
    // dùng hàm findIndex cho mảng filterStatus 
    // findIndex là một phương thức của mảng trong JavaScript, được sử dụng để tìm chỉ số của phần tử đầu tiên 
    //trong mảng thỏa mãn một điều kiện nhất định. Phương thức này trả về chỉ số của phần tử đầu tiên thỏa mãn 
    //điều kiện được cung cấp bởi một hàm callback. Nếu không có phần tử nào thỏa mãn điều kiện, findIndex sẽ trả về -1. 
    filterStatus[index].class = "active";
  }else{
    const index = filterStatus.findIndex(item => item.status == "");
    filterStatus[index].class = "active";
  }
  return filterStatus;
}
// file này chỉ có nhiệm vụ add class cho filterStatus