const router = require("express").Router();
const bookRoutes = require("./nudges");

// Book routes
router.use("/nudges", nudgeRoutes);

module.exports = router;
