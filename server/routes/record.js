const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("records")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      res.json({
        message: "Data berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myObj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect
    .collection("records")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      res.json({
        message: "Data berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("1 document updated");
      res.json(result);
    })
    .then(() => {
      console.log("1 document updated");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("records")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("1 document deleted");
      res.json(result);
    })
    .then((data) => {
      console.log("1 document deleted");
      res.json({
        message: "Data berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;