// عمل اكسبورت للاكسبريس بداخل الروتز رول
const express = require("express");
// تعريف ثابت رول راوتر لاستخدامها في القيت والبوست
const taskRouter = express.Router();
// استدعاء مابداخل الكنترول  من انشاء وعرض
const {
  newtask,
  gettasks,
  delettasks,
  updetatasks,
} = require("../controllers/task");
// الباثات التي تستخدمها في البسوت مان للعرض والانشاء
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");
taskRouter.post("/task", authentication, newtask);
taskRouter.get("/tasks", authentication, gettasks);
taskRouter.delete("/taskdelet/:_id", authentication, delettasks);
taskRouter.put("/tasksupdeta/:_id", updetatasks);
// عمل اكسبورت taskRouter
module.exports = taskRouter;
