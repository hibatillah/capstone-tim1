const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/supplier").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("suppliers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('supplier berhasil ditampilkan')
      res.json({
        message: "supplier berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/supplier/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("suppliers")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('supplier berhasil ditampilkan')
      res.json({
        message: "supplier berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/supplier/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
    type: req.body.type,
    productSupply: req.body.productSupply,
  };
  db_connect
    .collection("suppliers")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('supplier berhasil ditambahkan')
      res.json({
        message: "supplier berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/supplier/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      type: req.body.type,
      productSupply: req.body.productSupply,
    },
  };
  db_connect
    .collection("suppliers")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update supplier");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update supplier");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/supplier/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("suppliers")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("supplier berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("supplier berhasil dihapus");
      res.json({
        message: "supplier berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;