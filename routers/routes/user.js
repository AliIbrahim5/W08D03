// عمل ريكواير للاكسبريس
const express = require("express");
// تسميه يوزر روتر لتعريفة واستخدامه في الاندكس
const userRoute = express.Router();

// امتداد الكنترول يوزر
const { resgister, login,getalluser,deletuser } = require("./../controllers/user");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

// باث التسجيل
userRoute.post("/resgister", resgister);
// باث الدخول
userRoute.post("/login",login);

// يعرض جميع اليوزرات 
userRoute.get("/allusers",authentication,authorization, getalluser);
// يحذف اليوزر عبر الايدي
userRoute.delete("/userdelet/:_id",authentication,authorization, deletuser);
// عمل اكسبورت لليوزر روتر
module.exports = userRoute;