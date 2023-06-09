const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/produk").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("produk")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('produk berhasil ditampilkan')
      res.json({
        message: "produk berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/produk/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("produk")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('produk berhasil ditampilkan')
      res.json({
        message: "produk berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/produk/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
    type: req.body.type,
    compositions: req.body.compositions,
    price: req.body.price,
    manufactureDate: req.body.manufactureDate,
    expireDate: req.body.expireDate,
  };
  db_connect
    .collection("produk")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('produk berhasil ditambahkan')
      res.json({
        message: "produk berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/produk/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      type: req.body.type,
      compositions: req.body.compositions,
      price: req.body.price,
      manufactureDate: req.body.manufactureDate,
      expireDate: req.body.expireDate,
    },
  };
  db_connect
    .collection("produk")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update produk");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update produk");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/produk/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("produk")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("produk berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("produk berhasil dihapus");
      res.json({
        message: "produk berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;