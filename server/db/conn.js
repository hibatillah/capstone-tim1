const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client
      .connect(function (err, db) {
        if (db) {
          console.log("Successfully connected to MongoDB.");
        }
        return callback(err);
      })
      .then(() => {
        _db = client.db("capstone");
        console.log("Successfully connected to MongoDB.");
      });
  },
  getDb: function () {
    return _db;
  },
};
