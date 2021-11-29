const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new MongoClient(
  "mongodb+srv://Absaar:password1548@cluster0.oaxoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

client.connect().then(function (mClient) {
  db = mClient.db();
  console.log("Mongodb Connection is successful");
  app.listen(7000, function () {
    console.log("Server Started on port 7000");
  });
});

let obj;

app.get("/", function (req, res) {
  obj = [];
  db.collection("Details")
    .findOne({ name: "Absaar Ali" })
    .then(function (element) {
      res.send(element);
    });
});
