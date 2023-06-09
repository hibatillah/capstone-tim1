const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/transaction").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("transaction")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("transaction berhasil ditampilkan");
      res.json({
        message: "transaction berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/transaction/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("transaction")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("transaction berhasil ditampilkan");
      res.json({
        message: "transaction berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/transaction/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    dateTime: req.body.dateTime,
    codeTransaction: req.body.codeTransaction,
    cashier: req.body.cashier,
    customer: req.body.customer,
    productPurchased: req.body.productPurchased,
    amount: req.body.amount,
    totalPrice: req.body.totalPrice,
    paymentType: req.body.paymentType,
    description: req.body.description,
  };
  db_connect
    .collection("transaction")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log("transaction berhasil ditambahkan");
      res.json({
        message: "transaction berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/transaction/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      dateTime: req.body.dateTime,
      codeTransaction: req.body.codeTransaction,
      cashier: req.body.cashier,
      customer: req.body.customer,
      productPurchased: req.body.productPurchased,
      amount: req.body.amount,
      totalPrice: req.body.totalPrice,
      paymentType: req.body.paymentType,
      description: req.body.description,
    },
  };
  db_connect
    .collection("transaction")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update transaction");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update transaction");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/transaction/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("transaction")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("transaction berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("transaction berhasil dihapus");
      res.json({
        message: "transaction berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;
