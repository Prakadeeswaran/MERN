const express = require("express");
const router = express.Router();

// @route   GET /api/users/test
// @desc    user test
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "user test suucessfully" });
});

module.exports = router;
