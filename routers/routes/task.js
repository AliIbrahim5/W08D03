// عمل اكسبورت للاكسبريس بداخل الروتز رول
const express = require("express");
// تعريف ثابت رول راوتر لاستخدامها في القيت والبوست
const taskRouter = express.Router();
// استدعاء مابداخل الكنترول  من انشاء وعرض
const { newtask, gettasks } = require("../controllers/task");
// الباثات التي تستخدمها في البسوت مان للعرض والانشاء
taskRouter.post("/task", newtask);
taskRouter.get("/tasks", gettasks);
// عمل اكسبورت taskRouter
module.exports = taskRouter;
