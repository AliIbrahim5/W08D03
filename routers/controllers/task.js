// ريكواير لمجلد ارول في الموديولز
const taskmodel = require("../../db/models/task");
// عمل نيو موديول لاخذها من البوست مان عن طريق البدي
const newtask = (req, res) => {
  const { name, task } = req.body;

  const newtask = new taskmodel({
    name,
    user: req.token.id,
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
    .find({ user: req.token.id })
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
    .findByIdAndDelete(_id, { $set: { isDelete: true } })
    .then((result) => {
      if (result) {
        res.status(200).json("delettask");
      } else {
        res.status(404).json("user undefind");
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

const updetatasks = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  taskmodel
    .findOneAndUpdate(
      { _id: id, creator: req.token.id, deleted: false },
      { name: name },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({ message: `There is no todo with this ID: ${id}` });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// عمل اكسبورت لارسالها الى الروتز
module.exports = { newtask, gettasks, delettasks, updetatasks };
