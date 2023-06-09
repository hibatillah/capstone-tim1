const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/order").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("orders")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil ditampilkan");
      res.json({
        message: "order berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/order/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("orders")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil ditampilkan");
      res.json({
        message: "order berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/order/add").post(function (req, res) {
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
    .collection("orders")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log("order berhasil ditambahkan");
      res.json({
        message: "order berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/order/update/:id").put(function (req, res) {
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
    .collection("orders")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update order");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update order");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/order/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("orders")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("order berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil dihapus");
      res.json({
        message: "order berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;
