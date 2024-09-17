const express = require('express');

const router = express.Router();
// dòng trên tạo ra một đối tượng tên là router để quản lý route
const controller = require("../../controllers/client/home.controller");
router.get('/', controller.index);
// bên trong dùng get
module.exports=router;