const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/bahan").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("bahan_baku")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan baku berhasil ditampilkan')
      res.json({
        message: "bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/bahan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahan_baku")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahan baku berhasil ditampilkan')
      res.json({
        message: "bahan baku berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/bahan/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
    priceUnit: req.body.priceUnit,
    supplier: req.body.supplier,
  };
  db_connect
    .collection("bahan_baku")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('bahan baku berhasil ditambahkan')
      res.json({
        message: "bahan baku berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/bahan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      priceUnit: req.body.priceUnit,
      supplier: req.body.supplier,
    },
  };
  db_connect
    .collection("bahan_baku")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update bahan baku");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update bahan baku");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/bahan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahan_baku")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("bahan baku berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("bahan baku berhasil dihapus");
      res.json({
        message: "bahan baku berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;