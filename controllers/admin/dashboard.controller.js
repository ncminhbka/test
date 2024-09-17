module.exports.dashboard = (req, res) => {
  res.render("admin/pages/dashboard/index",{
    pageTitle: "Trang Tổng Quan"
    // gửi biến pageTitle ra ngoài views. bất cứ file pug nào cũng gọi dc biến này
});
}