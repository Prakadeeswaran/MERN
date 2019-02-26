const express = require("express");
const router = express.Router();

// @route   GET /api/profile/test
// @desc    profile test
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Profile test suucessfully" });
});

module.exports = router;
