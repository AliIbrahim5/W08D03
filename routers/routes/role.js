// عمل اكسبورت للاكسبريس بداخل الروتز رول
const express = require("express");
// تعريف ثابت رول راوتر لاستخدامها في القيت والبوست
const roleRouter = express.Router();
// استدعاء مابداخل الكنترول  من انشاء وعرض
const { newrolr, getrole } = require("../controllers/role");

const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");
// الباثات التي تستخدمها في البسوت مان للعرض والانشاء
roleRouter.post("/role", authentication, authorization, newrolr);
roleRouter.get("/read", authentication, authorization, getrole);
// عمل اكسبورت roleRouter
module.exports = roleRouter;
