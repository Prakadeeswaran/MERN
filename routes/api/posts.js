const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "Post test suucessfully" });
});

module.exports = router;
