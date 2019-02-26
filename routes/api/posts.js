const express = require("express");
const router = express.Router();

// @route   GET /api/posts/test
// @desc    posts test
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Post test suucessfully" });
});

module.exports = router;
