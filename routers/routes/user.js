// عمل ريكواير للاكسبريس
const express = require("express");
// تسميه يوزر روتر لتعريفة واستخدامه في الاندكس
const userRoute = express.Router();

// امتداد الكنترول يوزر
const { resgister, login,getalluser } = require("./../controllers/user");
// const authentication = require("./../controllers/authentication");

// باث التسجيل
userRoute.post("/resgister", resgister);
// باث الدخول
userRoute.post("/login", login,);
// عمل اكسبورت لليوزر روتر
userRoute.get("/allusers", getalluser);
module.exports = userRoute;