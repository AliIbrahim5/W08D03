// ريكواير لمجلد ارول في الموديولز
const taskmodel = require("../../db/models/task");
// عمل نيو موديول لاخذها من البوست مان عن طريق البدي
const newrolr = (req, res) => {
  const { name, task,isDelete } = req.body;

  const newtask = new taskmodel({
    name,
    task,
    isDelete,
  });
  newtask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(err);
    });
};
// newrolrاظهار النتائج التي تم تسجيلها في
const getrole = (req, res) => {
    taskmodel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
// عمل اكسبورت لارسالها الى الروتز
module.exports = { newrolr, getrole };
