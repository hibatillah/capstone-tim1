const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/cashier").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("cashiers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('cashier berhasil ditampilkan')
      res.json({
        message: "cashier berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/cashier/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("cashiers")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('cashier berhasil ditampilkan')
      res.json({
        message: "cashier berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/cashier/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
  };
  db_connect
    .collection("cashiers")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('cashier berhasil ditambahkan')
      res.json({
        message: "cashier berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/cashier/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
    },
  };
  db_connect
    .collection("cashiers")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update cashier");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update cashier");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/cashier/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("cashiers")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("cashier berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("cashier berhasil dihapus");
      res.json({
        message: "cashier berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;