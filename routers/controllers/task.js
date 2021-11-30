// ريكواير لمجلد ارول في الموديولز
const taskmodel = require("../../db/models/task");
// عمل نيو موديول لاخذها من البوست مان عن طريق البدي
const newtask = (req, res) => {
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
// gettasks النتائج التي تم تسجيلها في
const gettasks = (req, res) => {
    taskmodel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};


const delettasks = (req, res) => {
    const { _id } = req.params;
    taskmodel
    .findByIdAndDelete({_id})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
// عمل اكسبورت لارسالها الى الروتز
module.exports = { newtask, gettasks,delettasks };
