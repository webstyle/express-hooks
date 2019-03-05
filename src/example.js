const express = require("express");
const app = express();

const { before, after } = require("./index");

async function logger(data) {
  console.log("result data", data);
  console.log(new Date());
  console.log("Logger!!!!");
  return true;
}

async function logger2(data) {
  console.log(new Date());
  console.log("Logger2!!!!");
  return true;
}

app.get("/", after(logger), function(req, res) {
  console.log("handler works");
  return res.send({ num: 21 });
});

app.get("/2", after(logger2), function(req, res) {
  console.log("2 works");
  res.send("2 works");
});

app.listen(8080);
