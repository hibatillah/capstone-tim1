const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/material").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("materials")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('material berhasil ditampilkan')
      res.json({
        message: "material berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/material/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("materials")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('material berhasil ditampilkan')
      res.json({
        message: "material berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/material/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
    priceUnit: req.body.priceUnit,
    supplier: req.body.supplier,
  };
  db_connect
    .collection("materials")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('material berhasil ditambahkan')
      res.json({
        message: "material berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/material/update/:id").put(function (req, res) {
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
    .collection("materials")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update material");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update material");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/material/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("materials")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("material berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("material berhasil dihapus");
      res.json({
        message: "material berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;