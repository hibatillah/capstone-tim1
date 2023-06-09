const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('user berhasil ditampilkan')
      res.json({
        message: "user berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("user")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('user berhasil ditampilkan')
      res.json({
        message: "user berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/user/add").post(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myObj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect
    .collection("user")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('user berhasil ditambahkan')
      res.json({
        message: "user berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/user/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  };
  db_connect
    .collection("user")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update user");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update user");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/user/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("rotte");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("user")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("user berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("user berhasil dihapus");
      res.json({
        message: "user berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;