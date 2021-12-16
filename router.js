const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time:,", Date.now());
  next();
});

router.get("/greet", (req, res) => {
  res.send("Hello World");
});

router.get("/login", (req, res) => {
  res.send("ini halaman login");
});

module.exports = router;