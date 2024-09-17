// đưa status lên url tính năng lọc, ta sẽ add param status lên url để backend có req.query.status để mà add class: "active"
const buttonsStatus = document.querySelectorAll("[button-status]")
// document.querySelectorAll dùng để chọn tất cả các phần tử trong tài liệu HTML khớp với một bộ chọn CSS cụ thể
// thuộc tính tự định nghĩa thêm ngoặc vuông
if(buttonsStatus.length>0){
  let url = new URL(window.location.href);
  // lấy ra url

  buttonsStatus.forEach(button => {
    button.addEventListener("click", () => {
      const statusOfButton = button.getAttribute("button-status");
      // bắt sự kiện click cho mỗi nút. khi click vào sẽ lấy ra status của nút đó
      if(statusOfButton){
        url.searchParams.set("status", statusOfButton);
        // add vào url 1 param là status. status này sẽ bằng giá trị của statusOfButton. VD ?status=active
      }
      else{
        url.searchParams.delete("status");
        // xóa param status. đang có ?status=active (đang ở trang các sp còn hoạt động mà ấn về trang tất cả)
        // thì nó sẽ xóa ?status=active đi. còn nếu đang ở trang tất cả ấn về trang tất cả thì hàm delete ko làm gì cả
      }
      window.location.href=url.href;
      // cuối cùng chuyển hướng trang đến url mới
    })
  });
}
// vậy đã đưa đc param lên url khi click nút

//form search, cũng đưa param keyword lên url
const formSearch = document.querySelector("#form-search");
//document.querySelector để chọn phần tử đầu tiên trong tài liệu HTML khớp với bộ chọn CSS được cung cấp
//"#form-search" là một bộ chọn CSS. Dấu # chỉ định rằng bạn đang tìm kiếm phần tử có id là form-search.
if(formSearch){
  let url = new URL(window.location.href);
  // lấy url
  formSearch.addEventListener("submit", (e)=>{
    // láng nghe sự kiện submit
    e.preventDefault();
    //Mặc định, khi một form được submit, trang sẽ tải lại và dữ liệu form sẽ được gửi đến server
    //ko cho tải lại, nếu ko có dòng trên thì các param khác mất hết trừ keyword, do đó k thể vừa lọc vừa tìm d
    
    const keyword = e.target.elements.keyword.value;
    // lấy ra dòng ng dùng nhập
    if(keyword){
      // nếu người dùng có nhập
      url.searchParams.set("keyword", keyword);
      // đưa lên url
    }
    else{
      url.searchParams.delete("keyword");
      // nếu ng dùng ko nhập gì mà ấn tìm thì xóa luôn param keyword đi
    }
    
    window.location.href=url.href;
    // chuyển hướng, vậy là xong đưa đc keyword lên url cho backend
  });
}

// pagination
const buttonPagination = document.querySelectorAll("[button-pagination]"); // Lấy tất cả button
// console.log(buttonPagination);
if(buttonPagination.length > 0) {
    let url = new URL(window.location.href);

    buttonPagination.forEach(button => {
        button.addEventListener("click", () => {
            // console.log(button);

            // Lấy số trang
            const page = button.getAttribute("button-pagination");
            // console.log(page);
            
            // Update số trang trên url
            url.searchParams.set("page", page);

            window.location.href = url.href;
        });
    });
}
